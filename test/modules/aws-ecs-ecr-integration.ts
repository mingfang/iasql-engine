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

const sidecarBegin = runBegin.bind(null, dbAliasSidecar);
const sidecarCommit = runCommit.bind(null, dbAliasSidecar);
const sidecarInstall = runInstall.bind(null, dbAliasSidecar);
const sidecarQuery = runQuery.bind(null, dbAliasSidecar);

const begin = runBegin.bind(null, dbAlias);
const commit = runCommit.bind(null, dbAlias);
const rollback = runRollback.bind(null, dbAlias);
const query = runQuery.bind(null, dbAlias);
const install = runInstall.bind(null, dbAlias);
const uninstall = runUninstall.bind(null, dbAlias);

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
const serviceRepositoryName = `${prefix}${dbAlias}servicerepository`;
const clusterName = `${prefix}${dbAlias}cluster`;
const newClusterName = `${prefix}${dbAlias}clusternew`;
const imageTag = 'latest';
const containerMemoryReservation = 2048; // MiB
const containerEssential = true;
const containerPort = 6379;
const hostPort = 6379;
const protocol = 'tcp';
const tdFamily = `${prefix}${dbAlias}td`;
const tdRepositoryFamily = `${prefix}${dbAlias}tdrepository`;
const taskExecRoleName = `${prefix}${dbAlias}ecsTaskExecRole-${region}`;
const taskRolePolicyDoc = JSON.stringify({
  Version: '2012-10-17',
  Statement: [
    {
      Sid: '',
      Effect: 'Allow',
      Principal: {
        Service: 'ecs-tasks.amazonaws.com',
      },
      Action: 'sts:AssumeRole',
    },
  ],
});
const taskPolicyArn = 'arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy';
const tdCpuMem = CpuMemCombination['vCPU2-8GB'];
const serviceDesiredCount = 1;
const serviceTargetGroupName = `${serviceName}tg`;
const serviceLoadBalancerName = `${serviceName}lb`;
const repositoryName = `${prefix}${dbAlias}repository`;
const containerNameRepository = `${prefix}${dbAlias}containerrepository`;
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
    query(
      `
    UPDATE aws_regions SET is_enabled = FALSE WHERE region != '${region}' AND region != (SELECT region FROM aws_regions WHERE region != 'us-east-1' AND region != '${region}' ORDER BY region DESC LIMIT 1);
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
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

  // Service spinning up a task definition with container using a private ecr
  // ECR
  it('starts a transaction', begin());

  it(
    'adds a new ECR',
    query(
      `
    INSERT INTO repository
        (repository_name)
    VALUES
        ('${repositoryName}');
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check repository insertion',
    query(
      `
    SELECT *
    FROM repository
    WHERE repository_name = '${repositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  // IAM
  it(
    'adds a new role',
    query(
      `
    INSERT INTO iam_role (role_name, assume_role_policy_document, attached_policies_arns)
    VALUES ('${taskExecRoleName}', '${taskRolePolicyDoc}', array['${taskPolicyArn}']);
`,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check role insertion',
    query(
      `
    SELECT *
    FROM iam_role
    WHERE role_name = '${taskExecRoleName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  // Task definition
  it(
    'adds a new task definition',
    query(
      `
    INSERT INTO task_definition ("family", task_role_name, execution_role_name, cpu_memory)
    VALUES ('${tdRepositoryFamily}', '${taskExecRoleName}', '${taskExecRoleName}', '${tdCpuMem}');
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
    WHERE family = '${tdRepositoryFamily}' AND status IS NULL;
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'adds a new container definition',
    query(
      `
    BEGIN;
      INSERT INTO container_definition ("name", repository_id, region, tag, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id)
      VALUES('${containerNameRepository}', (select id from repository where repository_name = '${repositoryName}' and region = '${region}'), (select region from repository where repository_name = '${repositoryName}'), '${imageTag}', ${containerEssential}, ${containerMemoryReservation}, ${hostPort}, ${containerPort}, '${protocol}', '{ "test": 2}', (select id from task_definition where family = '${tdRepositoryFamily}' and status is null and region = '${region}' limit 1));
      INSERT INTO container_definition ("name", repository_id, region, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id)
      VALUES('${containerNameRepository}dgst', (select id from repository where repository_name = '${repositoryName}' and region = '${region}'), (select region from repository where repository_name = '${repositoryName}'), false, ${containerMemoryReservation}, ${
        hostPort + 2
      }, ${
        containerPort + 2
      }, '${protocol}', '{ "test": 2}', (select id from task_definition where family = '${tdRepositoryFamily}' and status is null and region = '${region}' limit 1));
    COMMIT;
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
    WHERE name = '${containerNameRepository}' AND repository_id = (select id from repository where repository_name = '${repositoryName}' and region = '${region}') AND tag = '${imageTag}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('applies adds a new task definition with container definition', commit());

  it(
    'check task_definition insertion',
    query(
      `
    SELECT *
    FROM task_definition
    WHERE family = '${tdRepositoryFamily}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check container definition insertion',
    query(
      `
    SELECT *
    FROM container_definition
    WHERE name = '${containerNameRepository}' AND repository_id = (select id from repository where repository_name = '${repositoryName}' and region = '${region}') AND tag = '${imageTag}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('starts a transaction', begin());

  // Service
  it('fails adding a service', done => {
    query(
      `
    INSERT INTO service ("name", desired_count, subnets, assign_public_ip, cluster_id, task_definition_id, target_group_id)
    VALUES ('${serviceRepositoryName}', ${serviceDesiredCount}, '{"fake"}', 'ENABLED', (SELECT id FROM cluster WHERE cluster_name = '${clusterName}'), (select id from task_definition where family = '${tdRepositoryFamily}' and region = '${region}' order by revision desc limit 1), (SELECT id FROM target_group WHERE target_group_name = '${serviceTargetGroupName}' and region = '${region}'));
    `,
      undefined,
      true,
      () => ({ username, password }),
    )((e: any) => {
      try {
        expect(e.message).toContain('violates check constraint');
      } catch (err) {
        return done(err);
      }
      return done();
    });
  });

  it(
    'adds a new service',
    query(
      `
    BEGIN;
      INSERT INTO service ("name", desired_count, subnets, assign_public_ip, cluster_id, task_definition_id, target_group_id)
      VALUES ('${serviceRepositoryName}', ${serviceDesiredCount}, (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true and vpc.region = '${region}' limit 3)), 'ENABLED', (SELECT id FROM cluster WHERE cluster_name = '${clusterName}'), (select id from task_definition where family = '${tdRepositoryFamily}' and region = '${region}' order by revision desc limit 1), (SELECT id FROM target_group WHERE target_group_name = '${serviceTargetGroupName}' and region = '${region}'));

      INSERT INTO service_security_groups (service_id, security_group_id)
      VALUES ((SELECT id FROM service WHERE name = '${serviceRepositoryName}'), (select id from security_group where group_name = '${securityGroup}' and region = '${region}' limit 1));
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('fails deleting a subnet in use', done => {
    query(
      `
        DELETE FROM subnet;
      `,
      undefined,
      true,
      () => ({ username, password }),
    )((e: any) => {
      try {
        expect(e.message).toContain('is being used by');
      } catch (err) {
        return done(err);
      }
      return done();
    });
  });

  it(
    'check service insertion',
    query(
      `
    SELECT *
    FROM service
    WHERE name = '${serviceRepositoryName}';
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
    WHERE service_id = (SELECT id FROM service WHERE name = '${serviceRepositoryName}');
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
    WHERE name = '${serviceRepositoryName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it('uninstalls the ecs module', uninstall(['aws_ecs_fargate']));

  it('starts a transaction', begin());

  it(
    'delete role while ecs is uninstalled',
    query(
      `
    delete from iam_role
    where role_name = '${taskExecRoleName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check role deletion',
    query(
      `
    SELECT *
    FROM iam_role
    where role_name = '${taskExecRoleName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('applies role deletion', commit());

  it(
    'check role deletion',
    query(
      `
    SELECT *
    FROM iam_role
    where role_name = '${taskExecRoleName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('installs the ecs module with missing role', install(['aws_ecs_fargate']));

  it('starts a transaction', begin());

  it(
    'deletes service',
    query(
      `
    BEGIN;
      delete from service_security_groups
      using service
      where name = '${serviceRepositoryName}';

      delete from service
      where name = '${serviceRepositoryName}';
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
    WHERE name = '${serviceRepositoryName}';
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
      where container_definition.task_definition_id = task_definition.id and task_definition.family = '${tdRepositoryFamily}';

      delete from task_definition
      where family = '${tdRepositoryFamily}';

      delete from repository
      where repository_name = '${repositoryName}';
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
    'check role deletion',
    query(
      `
    SELECT *
    FROM iam_role
    WHERE role_name = '${taskExecRoleName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'check task def deletion',
    query(
      `
    SELECT *
    FROM task_definition
    WHERE family = '${tdFamily}';
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
