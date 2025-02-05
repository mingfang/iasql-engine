---
sidebar_position: 4
slug: '/aws_ec2'
---

# AWS EC2

## Create and update instances

Install the AWS EC2 module

```sql
SELECT * FROM iasql_install('aws_ec2');
```

Create two new EC2 instances associated with the `default` security group. An instance `name` tag is required. `resolve:ssm:/aws/service/canonical/ubuntu/server/20.04/stable/current/amd64/hvm/ebs-gp2/ami-id` resolves to the AMI ID for Ubuntu v20.04 in the corresponding AWS region using existing [AWS SSM parameters for AMIs](https://aws.amazon.com/blogs/compute/using-system-manager-parameter-as-an-alias-for-ami-id/).

:::warning

AWS uses a different AMI id for the same instance type in each region. If you do not use an AWS SSM parameter described above to resolve the AMI id be sure to find and use the correct AMI id for the corresponding region and instance type.

:::

```sql TheButton
INSERT INTO instance (ami, instance_type, tags)
  VALUES ('resolve:ssm:/aws/service/canonical/ubuntu/server/20.04/stable/current/amd64/hvm/ebs-gp2/ami-id', 't2.micro', '{"name":"i-1"}');

INSERT INTO instance_security_groups (instance_id, security_group_id) SELECT
  (SELECT id FROM instance WHERE tags ->> 'name' = 'i-1'),
  (SELECT id FROM security_group WHERE group_name='default' AND vpc_id = (SELECT id FROM vpc WHERE is_default = true));

INSERT INTO instance (ami, instance_type, tags)
  VALUES ('resolve:ssm:/aws/service/canonical/ubuntu/server/20.04/stable/current/amd64/hvm/ebs-gp2/ami-id', 't2.micro', '{"name":"i-2"}');

INSERT INTO instance_security_groups (instance_id, security_group_id) SELECT
  (SELECT id FROM instance WHERE tags ->> 'name' = 'i-2'),
  (SELECT id FROM security_group WHERE group_name='default' AND vpc_id = (SELECT id FROM vpc WHERE is_default = true));
```

Apply changes

```sql
SELECT * FROM iasql_apply();
```

Query newly created instances. View the table schema [here](https://dbdocs.io/iasql/iasql?table=instance&schema=public&view=table_structure)

```sql
SELECT *
FROM instance
WHERE tags ->> 'name' = 'i-1' OR
tags ->> 'name' = 'i-2';
```

Get an instance count

```sql
SELECT COUNT(*)
FROM instance;
```

Change the instance to the AWS Linux AMI for the previously created `i-1` instance. This will trigger a recreate so the existing instance will be terminated and a new one will be created when `iasql_apply` is called.

```sql
UPDATE instance SET ami = 'resolve:ssm:/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2' WHERE tags ->> 'name' = 'i-1';
SELECT * FROM iasql_apply();
```

## Read-only instance metadata

Install the AWS EC2 module

```sql
SELECT * FROM iasql_install('aws_ec2_metadata');
```

View the metadata for the previously created `i-1` instance. View the table schema [here](https://dbdocs.io/iasql/iasql?table=instance_metadata&schema=public&view=table_structure)

```sql
SELECT *
FROM instance_metadata
WHERE instance_id = (
  SELECT instance_id
  FROM instance
  WHERE tags ->> 'name' = 'i-1'
);
```