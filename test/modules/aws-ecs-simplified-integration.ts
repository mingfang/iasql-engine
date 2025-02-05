import { CpuMemCombination } from '../../src/modules/aws_ecs_fargate/entity';
import * as iasql from '../../src/services/iasql';
import {
  defaultRegion,
  execComposeDown,
  execComposeUp,
  finish,
  getPrefix,
  runBegin,
  runCommit,
  runInstall,
  runInstallAll,
  runQuery,
  runRollback,
  runUninstall,
} from '../helpers';

const prefix = getPrefix();
const dbAlias = 'ecssmptest';
const region = defaultRegion();
const begin = runBegin.bind(null, dbAlias);
const commit = runCommit.bind(null, dbAlias);
const rollback = runRollback.bind(null, dbAlias);
const query = runQuery.bind(null, dbAlias);
const install = runInstall.bind(null, dbAlias);
const installAll = runInstallAll.bind(null, dbAlias);
const uninstall = runUninstall.bind(null, dbAlias);
const modules = ['aws_ecs_simplified'];

// Test constants
const appName = `${prefix}${dbAlias}`;
const appPort = 4142;
const desiredCount = 1;
const cpuMem = CpuMemCombination['vCPU1-2GB'];
const updateCpuMem = CpuMemCombination['vCPU1-3GB'];
const imageTag = 'latest';
const updateImageTag = '0.1';
const publicIp = false;
const envVariables = '{ "test": 2}';

// TODO: Improve timings for this test
jest.setTimeout(1800000); // 30min timeout
beforeAll(async () => await execComposeUp());
afterAll(async () => await execComposeDown());

let username: string, password: string;

describe('ECS Simplified Integration Testing', () => {
  it('creates a new test db ECS', done => {
    (async () => {
      try {
        const { user, password: pgPassword } = await iasql.connect(dbAlias, 'not-needed', 'not-needed');
        username = user;
        password = pgPassword;
        if (!username || !password) throw new Error('Did not fetch pg credentials');
        done();
      } catch (e) {
        done(e);
      }
    })();
  });

  it('installs the aws_account module', install(['aws_account']));

  it(
    'inserts aws credentials',
    query(
      `
    INSERT INTO aws_credentials (access_key_id, secret_access_key)
    VALUES ('${process.env.AWS_ACCESS_KEY_ID}', '${process.env.AWS_SECRET_ACCESS_KEY}')
  `,
      undefined,
      false,
      () => ({ username, password }),
    ),
  );

  it('starts a transaction', begin());

  it('syncs the regions', commit());

  it(
    'sets the default region',
    query(
      `
    UPDATE aws_regions SET is_default = TRUE WHERE region = '${region}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'sets only 2 enabled regions to avoid long runs',
    query(`
    UPDATE aws_regions SET is_enabled = FALSE WHERE region != '${region}' AND region != (SELECT region FROM aws_regions WHERE region != 'us-east-1' AND region != '${region}' LIMIT 1);
  `),
  );

  it('installs the ecs simplified module and its dependencies', install(modules));

  it('starts a transaction', begin());

  it(
    'adds a new row',
    query(
      `
    INSERT INTO ecs_simplified (app_name, desired_count, app_port, cpu_mem, image_tag, public_ip)
    VALUES ('${appName}', ${desiredCount}, ${appPort}, '${cpuMem}', '${imageTag}', ${publicIp});
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check service row',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('undo changes', rollback());

  it(
    'check service row',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'check ecs_simplified row',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('starts a transaction', begin());

  it(
    'adds a new row',
    query(
      `
    INSERT INTO ecs_simplified (app_name, desired_count, app_port, cpu_mem, image_tag, public_ip)
    VALUES ('${appName}', ${desiredCount}, ${appPort}, '${cpuMem}', '${imageTag}', ${publicIp});
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'updates a row',
    query(
      `
    UPDATE ecs_simplified
    SET app_port = ${appPort + 1}
    WHERE app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check target_group row was replaced',
    query(
      `
    SELECT *
    FROM target_group
    WHERE target_group_name = '${appName}-target';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['port']).toBe(appPort + 1);
      },
    ),
  );

  it(
    'update target group directly',
    query(
      `
    UPDATE target_group
    SET health_check_path = '/'
    WHERE target_group_name = '${appName}-target';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check ecs_simplified row is gone',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'update target_group directly to correct value',
    query(
      `
    UPDATE target_group
    SET health_check_path = '/health'
    WHERE target_group_name = '${appName}-target';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check ecs_simplified row is gone',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'deletes the app',
    query(
      `
    delete from ecs_simplified
    where app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check target_group row was deleted',
    query(
      `
    SELECT *
    FROM target_group
    WHERE target_group_name = '${appName}-target';
  `,
      (res: any[]) => {
        expect(res.length).toBe(0);
      },
    ),
  );

  it(
    'check service row was deleted',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'adds a new row',
    query(
      `
    INSERT INTO ecs_simplified (app_name, desired_count, app_port, cpu_mem, image_tag, public_ip)
    VALUES ('${appName}', ${desiredCount}, ${appPort}, '${cpuMem}', '${imageTag}', ${publicIp});
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check service row',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('applies adds a new row', commit());

  it(
    'check service row',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check ecs_simplified row insertion',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['load_balancer_dns']).toBeDefined();
        expect(res[0]['repository_uri'].includes(appName)).toBeTruthy();
      },
    ),
  );

  it('uninstalls the ECS Simplified module', uninstall(modules));

  it('installs the ECS Simplified module', install(modules));

  it(
    'check service row',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check ecs_simplified row insertion',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['load_balancer_dns']).toBeDefined();
        expect(res[0]['repository_uri'].includes(appName)).toBeTruthy();
      },
    ),
  );

  it('starts a transaction', begin());

  it(
    'updates a row',
    query(
      `
    UPDATE ecs_simplified
    SET load_balancer_dns = 'invalid'
    WHERE app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies row update and should restore the dns value', commit());

  it(
    'check row was restored',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res[0]['load_balancer_dns'] === 'invalid').toBeFalsy();
        return expect(res.length).toBe(1);
      },
    ),
  );

  it('starts a transaction', begin());

  it(
    'updates a row',
    query(
      `
    UPDATE ecs_simplified
    SET app_port = ${appPort + 1}
    WHERE app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check target_group row was replaced',
    query(
      `
    SELECT *
    FROM target_group
    WHERE target_group_name = '${appName}-target';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['port']).toBe(appPort + 1);
      },
    ),
  );

  it('applies row update and should replace', commit());

  it(
    'check row was replaced',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['repository_uri'].includes(appName)).toBeTruthy();
        expect(res[0]['app_port']).toBe(appPort + 1);
      },
    ),
  );

  it('starts a transaction', begin());

  it(
    'updates a row',
    query(
      `
    UPDATE ecs_simplified
    SET repository_uri = NULL
    WHERE app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies row update and should restore using the right repository uri', commit());

  it(
    'check that the repository_uri has been restored with the same repository',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['repository_uri'].includes(appName)).toBeTruthy();
      },
    ),
  );

  it('starts a transaction', begin());

  it(
    'updates a row',
    query(
      `
    UPDATE ecs_simplified
    SET cpu_mem = '${updateCpuMem}', image_tag = '${updateImageTag}'
    WHERE app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies row update and should update service', commit());

  it(
    'check row was updated',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['cpu_mem']).toBe(updateCpuMem);
        expect(res[0]['image_tag']).toBe(updateImageTag);
      },
    ),
  );

  it('starts a transaction', begin());

  it(
    'updates env vars',
    query(
      `
        UPDATE ecs_simplified SET env_variables = '${envVariables}' WHERE app_name = '${appName}';
      `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );
  it('applies env var update', commit());

  it(
    'tries to force update a service',
    query(
      `
    SELECT deploy_service(arn) FROM service WHERE name='${appName}-service'`,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0].deploy_service).toContain('OK');
      },
    ),
  );

  it(
    'check service force update',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
      },
    ),
  );

  it(
    'check container_definition env variables',
    query(
      `
    SELECT *
    FROM container_definition
    WHERE name = '${appName}-container';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['env_variables']).toBeDefined();
      },
    ),
  );

  it(
    'check service force update',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['env_variables']).toBeDefined();
      },
    ),
  );

  it(
    'check container_definition env variables',
    query(
      `
    SELECT *
    FROM container_definition
    WHERE name = '${appName}-container';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
        expect(res[0]['env_variables']).toBeDefined();
      },
    ),
  );

  it(
    'check service force update',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${appName}-service';
  `,
      (res: any[]) => {
        expect(res.length).toBe(1);
      },
    ),
  );

  it('starts a transaction', begin());

  it(
    'deletes the app',
    query(
      `
    delete from ecs_simplified
    where app_name = '${appName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies deletes the app', commit());

  it(
    'check there are no more rows',
    query(
      `
    SELECT *
    FROM ecs_simplified
    WHERE app_name = '${appName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('deletes the test db', done => void iasql.disconnect(dbAlias, 'not-needed').then(...finish(done)));
});

describe('ECS Simplified install/uninstall', () => {
  it('creates a new test db', done => {
    (async () => {
      try {
        const { user, password: pgPassword } = await iasql.connect(dbAlias, 'not-needed', 'not-needed');
        username = user;
        password = pgPassword;
        if (!username || !password) throw new Error('Did not fetch pg credentials');
        done();
      } catch (e) {
        done(e);
      }
    })();
  });

  it('installs the aws_account module', install(['aws_account']));

  it(
    'inserts aws credentials',
    query(
      `
    INSERT INTO aws_credentials (access_key_id, secret_access_key)
    VALUES ('${process.env.AWS_ACCESS_KEY_ID}', '${process.env.AWS_SECRET_ACCESS_KEY}')
  `,
      undefined,
      false,
      () => ({ username, password }),
    ),
  );

  it('starts a transaction', begin());

  it('syncs the regions', commit());

  it(
    'sets the default region',
    query(
      `
    UPDATE aws_regions SET is_default = TRUE WHERE region = 'us-east-1';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'sets only 2 enabled regions to avoid long runs',
    query(`
    UPDATE aws_regions SET is_enabled = FALSE WHERE region != 'us-east-1' AND region != (SELECT region FROM aws_regions WHERE region != 'us-east-1' LIMIT 1);
  `),
  );

  it('installs the ECS Simplified module', install(modules));

  it('uninstalls the ECS Simplified module', uninstall(modules));

  it('installs all modules', installAll());

  it('uninstalls the ECS Simplified module', uninstall(modules));

  it('installs the ECS Simplified module', install(modules));

  it('deletes the test db', done => void iasql.disconnect(dbAlias, 'not-needed').then(...finish(done)));
});
