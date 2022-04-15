import config from '../../src/config';
import * as iasql from '../../src/services/iasql'
import { runQuery, runInstall, runUninstall, runApply, finish, execComposeUp, execComposeDown, runSync, } from '../helpers'

const dbAlias = 'vpctest';
const apply = runApply.bind(null, dbAlias);
const sync = runSync.bind(null, dbAlias);
const query = runQuery.bind(null, dbAlias);
const install = runInstall.bind(null, dbAlias);
const uninstall = runUninstall.bind(null, dbAlias);
// We have to install the `aws_security_group` to test fully the integration even though is not being used,
// since the `aws_vpc` module creates a `default` security group automatically.
const modules = ['aws_vpc', 'aws_security_group'];

const availabilityZone = `${process.env.AWS_REGION ?? 'barf'}a`;
const randIPBlock = Math.floor(Math.random() * 255);
const replaceRandIPBlock = randIPBlock === 255 ? randIPBlock - 1 : randIPBlock + 1;

jest.setTimeout(240000);
beforeAll(async () => await execComposeUp());
afterAll(async () => await execComposeDown(modules));

describe('VPC Integration Testing', () => {
  it('creates a new test db', (done) => void iasql.connect(
    dbAlias,
    process.env.AWS_REGION ?? 'barf',
    process.env.AWS_ACCESS_KEY_ID ?? 'barf',
    process.env.AWS_SECRET_ACCESS_KEY ?? 'barf',
    'not-needed', 'not-needed').then(...finish(done)));

  it('installs the vpc module', install(modules));

  it('adds a new vpc', query(`  
    INSERT INTO vpc (cidr_block)
    VALUES ('192.${randIPBlock}.0.0/16');
  `));

  it('undo changes', sync());

  it('adds a new vpc', query(`  
    INSERT INTO vpc (cidr_block)
    VALUES ('192.${randIPBlock}.0.0/16');
  `));

  it('applies the vpc change', apply());

  it('adds a subnet', query(`
    INSERT INTO subnet (availability_zone, vpc_id, cidr_block)
    SELECT '${availabilityZone}', id, '192.${randIPBlock}.0.0/16'
    FROM vpc
    WHERE is_default = false
    AND cidr_block = '192.${randIPBlock}.0.0/16';
  `));

  it('applies the subnet change', apply());

  it('uninstalls the vpc module', uninstall(modules));

  it('installs the vpc module again (to make sure it reloads stuff)', install(modules));

  it('queries the subnets to confirm the record is present', query(`
    SELECT * FROM subnet WHERE cidr_block = '192.${randIPBlock}.0.0/16'
  `, (res: any) => expect(res.length).toBeGreaterThan(0)));

  it('queries the vpcs to confirm the record is present', query(`
    SELECT * FROM vpc WHERE cidr_block = '192.${randIPBlock}.0.0/16'
  `, (res: any) => expect(res.length).toBeGreaterThan(0)));

  it('queries the vpc to confirm the record restore', query(`
    SELECT * FROM vpc WHERE cidr_block = '192.${randIPBlock}.0.0/16'
  `, (res: any) => {  
    expect(res.length).toBeGreaterThan(0);
    expect(res[0].state).toBe('available');
  }));

  it('updates a vpc (update)', query(`  
    UPDATE vpc
    SET state = 'pending'
    WHERE cidr_block = '192.${randIPBlock}.0.0/16';
  `));

  it('queries the vpc to confirm the record restore', query(`
    SELECT * FROM vpc WHERE cidr_block = '192.${randIPBlock}.0.0/16'
  `, (res: any) => {  
    expect(res.length).toBeGreaterThan(0);
    expect(res[0].state).toBe('pending');
  }));

  it('applies the vpc change', apply());

  it('queries the vpc to confirm the record restore', query(`
    SELECT * FROM vpc WHERE cidr_block = '192.${randIPBlock}.0.0/16'
  `, (res: any) => {  
    expect(res.length).toBeGreaterThan(0);
    expect(res[0].state).toBe('available');
  }));

  it('updates a vpc (replace)', query(`  
    UPDATE vpc
    SET cidr_block = '192.${replaceRandIPBlock}.0.0/16'
    WHERE cidr_block = '192.${randIPBlock}.0.0/16';
  `));

  it('applies the vpc change', apply());

  it('queries the vpc to confirm the record replacement', query(`
    SELECT * FROM vpc WHERE cidr_block = '192.${replaceRandIPBlock}.0.0/16'
  `, (res: any) => expect(res.length).toBeGreaterThan(0)));

  it('deletes the subnet', query(`
    WITH vpc as (
      SELECT id
      FROM vpc
      WHERE is_default = false
      AND cidr_block = '192.${replaceRandIPBlock}.0.0/16'
    )
    DELETE FROM subnet
    USING vpc
    WHERE vpc_id = vpc.id;
  `));

  it('applies the subnet removal', apply());

  it('deletes the vpc', query(`
    WITH vpc as (
      SELECT id
      FROM vpc
      WHERE cidr_block = '192.${replaceRandIPBlock}.0.0/16'
    )
    DELETE FROM security_group
    USING vpc
    WHERE vpc_id = vpc.id;

    DELETE FROM vpc
    WHERE cidr_block = '192.${replaceRandIPBlock}.0.0/16';
  `));

  it('applies the vpc removal', apply());

  it('deletes the test db', (done) => void iasql
    .disconnect(dbAlias, 'not-needed')
    .then(...finish(done)));
});

describe('VPC install/uninstall', () => {
  it('creates a new test db', (done) => void iasql.connect(
    dbAlias,
    'us-east-1', // Share region with common tests
    process.env.AWS_ACCESS_KEY_ID ?? 'barf',
    process.env.AWS_SECRET_ACCESS_KEY ?? 'barf',
    'not-needed', 'not-needed').then(...finish(done)));

  it('installs the VPC module', install(
    modules));

  it('uninstalls the VPC module', uninstall(
    modules));

  it('installs all modules', (done) => void iasql.install(
    [],
    dbAlias,
    config.dbUser,
    true).then(...finish(done)));

  it('uninstalls the VPC module', uninstall(
    ['aws_vpc', 'aws_ecs_fargate', 'aws_security_group', 'aws_rds', 'aws_elb', 'aws_ec2']));

  it('installs the VPC module', install(
    ['aws_vpc',]));

  it('deletes the test db', (done) => void iasql
    .disconnect(dbAlias, 'not-needed')
    .then(...finish(done)));
});
