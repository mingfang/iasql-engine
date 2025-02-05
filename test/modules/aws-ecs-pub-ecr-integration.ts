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
  runQuery,
  runRollback,
  runUninstall,
} from '../helpers';

const prefix = getPrefix();
const dbAlias = 'ecstest';
const dbAliasSidecar = `${dbAlias}sync`;
const region = defaultRegion();

const begin = runBegin.bind(null, dbAlias);
const commit = runCommit.bind(null, dbAlias);
const rollback = runRollback.bind(null, dbAlias);
const query = runQuery.bind(null, dbAlias);
const install = runInstall.bind(null, dbAlias);
const uninstall = runUninstall.bind(null, dbAlias);

const sidecarBegin = runBegin.bind(null, dbAliasSidecar);
const sidecarCommit = runCommit.bind(null, dbAliasSidecar);
const sidecarQuery = runQuery.bind(null, dbAliasSidecar);
const sidecarInstall = runInstall.bind(null, dbAliasSidecar);

const modules = [
  'aws_ecr',
  'aws_elb',
  'aws_security_group',
  'aws_cloudwatch',
  'aws_ecs_fargate',
  'aws_vpc',
  'aws_iam',
];

// Test constants
const serviceName = `${prefix}${dbAlias}service`;
const servicePublicRepositoryName = `${prefix}${dbAlias}servpubrep`;
const clusterName = `${prefix}${dbAlias}cluster`;
const newClusterName = `${prefix}${dbAlias}clusternew`;
const imageTag = 'latest';
const containerMemoryReservation = 2048; // MiB
const containerEssential = true;
const containerPort = 6379;
const hostPort = 6379;
const protocol = 'tcp';
const tdPublicRepositoryFamily = `${prefix}${dbAlias}tdpublicrepository`;
const tdCpuMem = CpuMemCombination['vCPU2-8GB'];
const serviceDesiredCount = 1;
const serviceTargetGroupName = `${serviceName}tg`;
const serviceLoadBalancerName = `${serviceName}lb`;
const publicRepositoryName = `${prefix}${dbAlias}publicrepository-${region}`;
const containerNamePublicRepository = `${prefix}${dbAlias}containerpublicrepository`;
const securityGroup = `${prefix}${dbAlias}sg`;

// TODO: Improve timings for this test
jest.setTimeout(1800000); // 30min timeout
beforeAll(async () => await execComposeUp());
afterAll(async () => await execComposeDown());

let username: string, password: string;

describe('ECS Integration Testing', () => {
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
    UPDATE aws_regions SET is_enabled = FALSE WHERE region != '${region}' AND region != (SELECT region FROM aws_regions WHERE region != 'us-east-1' AND region != '${region}' ORDER BY region DESC LIMIT 1);
  `),
  );

  it('creates a new sidecar test db ECS', done =>
    void iasql.connect(dbAliasSidecar, 'not-needed', 'not-needed').then(...finish(done)));

  it('installs the aws_account module', sidecarInstall(['aws_account']));

  it(
    'inserts aws credentials',
    sidecarQuery(
      `
    INSERT INTO aws_credentials (access_key_id, secret_access_key)
    VALUES ('${process.env.AWS_ACCESS_KEY_ID}', '${process.env.AWS_SECRET_ACCESS_KEY}')
  `,
      undefined,
      false,
    ),
  );

  it('starts a transaction', sidecarBegin());

  it('syncs the regions', sidecarCommit());

  it(
    'sets the default region',
    sidecarQuery(`
    UPDATE aws_regions SET is_default = TRUE WHERE region = '${region}';
  `),
  );

  it(
    'sets only 2 enabled regions to avoid long runs',
    sidecarQuery(`
    UPDATE aws_regions SET is_enabled = FALSE WHERE region != '${region}' AND region != (SELECT region FROM aws_regions WHERE region != 'us-east-1' AND region != '${region}' ORDER BY region DESC LIMIT 1);
  `),
  );

  it('installs the ecs module and its dependencies in sidecar db', sidecarInstall(modules));

  it('installs the ecs module and its dependencies', install(modules));

  // Cluster
  it('starts a transaction', begin());

  it(
    'adds a new cluster',
    query(
      `
    INSERT INTO cluster (cluster_name)
    VALUES('${clusterName}');
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('undo changes', rollback());

  it(
    'check cluster insertion',
    query(
      `
    SELECT *
    FROM cluster
    WHERE cluster_name = '${clusterName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('starts a transaction', begin());

  it(
    'adds a new cluster',
    query(
      `
    INSERT INTO cluster (cluster_name)
    VALUES('${clusterName}');
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies adds a new cluster', commit());

  it(
    'check cluster insertion',
    query(
      `
    SELECT *
    FROM cluster
    WHERE cluster_name = '${clusterName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  // Service dependencies
  it('starts a transaction', begin());

  it(
    'adds service dependencies',
    query(
      `
    BEGIN;
      INSERT INTO security_group
        (description, group_name)
      VALUES
        ('${securityGroup}', '${securityGroup}');
      INSERT INTO security_group_rule
        (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)
      SELECT true, '-1', -1, -1, '0.0.0.0/0', '${securityGroup}', id
      FROM security_group
      WHERE group_name = '${securityGroup}';
      INSERT INTO target_group
          (target_group_name, target_type, protocol, port, vpc, health_check_path)
      VALUES
          ('${serviceTargetGroupName}', 'ip', 'HTTP', ${hostPort}, null, '/health');
      INSERT INTO load_balancer
          (load_balancer_name, scheme, vpc, load_balancer_type, ip_address_type)
      VALUES
          ('${serviceLoadBalancerName}', 'internet-facing', null, 'application', 'ipv4');
      INSERT INTO load_balancer_security_groups
          (load_balancer_id, security_group_id)
      VALUES
          ((SELECT id FROM load_balancer WHERE load_balancer_name = '${serviceLoadBalancerName}'),
            (SELECT id FROM security_group WHERE group_name = '${securityGroup}' LIMIT 1));
      INSERT INTO listener
          (load_balancer_id, port, protocol, action_type, target_group_id)
      VALUES
          ((SELECT id FROM load_balancer WHERE load_balancer_name = '${serviceLoadBalancerName}'),
            ${hostPort}, 'HTTP', 'forward',
           (SELECT id FROM target_group WHERE target_group_name = '${serviceTargetGroupName}'));
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies service dependencies', commit());

  it(
    'check target group insertion',
    query(
      `
    SELECT *
    FROM target_group
    WHERE target_group_name = '${serviceTargetGroupName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check target group insertion',
    query(
      `
    SELECT *
    FROM load_balancer
    WHERE load_balancer_name = '${serviceLoadBalancerName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  // Service spinning up a task definition with container using a public ecr
  // ECR
  it('starts a transaction', begin());

  it(
    'adds a new public ECR',
    query(
      `
    INSERT INTO public_repository
        (repository_name)
    VALUES
        ('${publicRepositoryName}');
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check public_repository insertion',
    query(
      `
    SELECT *
    FROM public_repository
    WHERE repository_name = '${publicRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  // Task definition
  it(
    'adds a new task definition',
    query(
      `
    INSERT INTO task_definition ("family", cpu_memory)
    VALUES ('${tdPublicRepositoryFamily}', '${tdCpuMem}');
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check task_definition insertion',
    query(
      `
    SELECT *
    FROM task_definition
    WHERE family = '${tdPublicRepositoryFamily}' AND status IS NULL;
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'adds a new container definition',
    query(
      `
    INSERT INTO container_definition ("name", public_repository_name, tag, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id)
    VALUES('${containerNamePublicRepository}', '${publicRepositoryName}', '${imageTag}', ${containerEssential}, ${containerMemoryReservation}, ${hostPort}, ${containerPort}, '${protocol}', '{ "test": 2}', (select id from task_definition where family = '${tdPublicRepositoryFamily}' and status is null and region = '${region}' limit 1));
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check container definition insertion',
    query(
      `
    SELECT *
    FROM container_definition
    WHERE name = '${containerNamePublicRepository}' AND public_repository_name = '${publicRepositoryName}' AND tag = '${imageTag}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('applies adds a new task definition with container definition', commit());

  it('starts a transaction', sidecarBegin());

  it('sync sidecar database', sidecarCommit());

  it(
    'check container definition insertion',
    query(
      `
    SELECT *
    FROM container_definition
    WHERE name = '${containerNamePublicRepository}' AND public_repository_name = '${publicRepositoryName}' AND tag = '${imageTag}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check task_definition insertion',
    query(
      `
    SELECT *
    FROM task_definition
    WHERE family = '${tdPublicRepositoryFamily}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check public_repository insertion',
    query(
      `
    SELECT *
    FROM public_repository
    WHERE repository_name = '${publicRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  // Service
  it('starts a transaction', begin());

  it(
    'adds a new service',
    query(
      `
    BEGIN;
      INSERT INTO service ("name", desired_count, subnets, assign_public_ip, cluster_id, task_definition_id, target_group_id)
      VALUES ('${servicePublicRepositoryName}', ${serviceDesiredCount}, (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true and vpc.region = '${region}' limit 3)), 'ENABLED', (SELECT id FROM cluster WHERE cluster_name = '${clusterName}'), (select id from task_definition where family = '${tdPublicRepositoryFamily}' order by revision desc limit 1), (SELECT id FROM target_group WHERE target_group_name = '${serviceTargetGroupName}' and region = '${region}'));

      INSERT INTO service_security_groups (service_id, security_group_id)
      VALUES ((SELECT id FROM service WHERE name = '${servicePublicRepositoryName}'), (select id from security_group where group_name = '${securityGroup}' and region = '${region}' limit 1));
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check service insertion',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${servicePublicRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check service_security_groups insertion',
    query(
      `
    SELECT *
    FROM service_security_groups
    WHERE service_id = (SELECT id FROM service WHERE name = '${servicePublicRepositoryName}');
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('applies service insertion', commit());

  it('starts a transaction', sidecarBegin());

  it('sync sidecar database', sidecarCommit());

  it(
    'check service insertion',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${servicePublicRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('uninstalls the ecs module', uninstall(['aws_ecs_fargate']));

  it('installs the ecs module', install(['aws_ecs_fargate']));

  it('starts a transaction', begin());

  it(
    'deletes service',
    query(
      `
    BEGIN;
      delete from service_security_groups
      using service
      where name = '${servicePublicRepositoryName}';

      delete from service
      where name = '${servicePublicRepositoryName}';
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies deletes service', commit());

  it(
    'check service deletion',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${servicePublicRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('starts a transaction', begin());

  it(
    'deletes container definitons',
    query(
      `
    begin;
      delete from container_definition
      using task_definition
      where container_definition.task_definition_id = task_definition.id and task_definition.family = '${tdPublicRepositoryFamily}';

      delete from task_definition
      where family = '${tdPublicRepositoryFamily}';

      delete from public_repository
      where repository_name = '${publicRepositoryName}';
    commit;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies deletes tasks and container definitions', commit());

  it('starts a transaction', sidecarBegin());

  it('sync sidecar database', sidecarCommit());

  it(
    'check container definition insertion',
    query(
      `
    SELECT *
    FROM container_definition
    WHERE name = '${containerNamePublicRepository}' AND public_repository_name = '${publicRepositoryName}' AND tag = '${imageTag}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'check task_definition insertion',
    query(
      `
    SELECT *
    FROM task_definition
    WHERE family = '${tdPublicRepositoryFamily}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'check public_repository insertion',
    query(
      `
    SELECT *
    FROM public_repository
    WHERE repository_name = '${publicRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('uninstalls the ecs module', uninstall(['aws_ecs_fargate']));

  it('installs the ecs module', install(['aws_ecs_fargate']));

  // deletes service dependencies
  it('starts a transaction', begin());

  it(
    'deletes service dependencies',
    query(
      `
    BEGIN;
      DELETE FROM listener
      WHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '${serviceLoadBalancerName}')
        and port = ${hostPort} and protocol = 'HTTP' and action_type = 'forward'
        and target_group_id = (SELECT id FROM target_group WHERE target_group_name = '${serviceTargetGroupName}');

      DELETE FROM load_balancer_security_groups
      WHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '${serviceLoadBalancerName}');

      DELETE FROM load_balancer
      WHERE load_balancer_name = '${serviceLoadBalancerName}';

      DELETE FROM target_group
      WHERE target_group_name = '${serviceTargetGroupName}';

      DELETE FROM security_group_rule
      USING security_group
      WHERE group_name = '${securityGroup}';

      DELETE FROM security_group
      WHERE group_name = '${securityGroup}';
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies deletes service dependencies', commit());

  it('starts a transaction', begin());

  it(
    'tries to update a cluster field (restore)',
    query(
      `
    UPDATE cluster SET cluster_status = 'fake' WHERE cluster_name = '${clusterName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies tries to update a cluster field (restore)', commit());

  it('starts a transaction', begin());

  it(
    'tries to update cluster (replace)',
    query(
      `
    UPDATE cluster SET cluster_name = '${newClusterName}' WHERE cluster_name = '${clusterName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies tries to update cluster (replace)', commit());

  it('starts a transaction', begin());

  it(
    'deletes the cluster',
    query(
      `
    delete from cluster
    where cluster_name = '${newClusterName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies deletes the cluster', commit());

  it('deletes the sidecar test db', done =>
    void iasql.disconnect(dbAliasSidecar, 'not-needed').then(...finish(done)));

  it('deletes the test db', done => void iasql.disconnect(dbAlias, 'not-needed').then(...finish(done)));
});
