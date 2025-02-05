import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

import { cloudId } from '../../../services/cloud-id';

/**
 * Table that will hold the user's AWS credentials.
 * When you interact with AWS, you specify your AWS security credentials to verify who you
 * are and whether you have permission to access the resources that you are requesting.
 * AWS uses the security credentials to authenticate and authorize your requests.
 *
 * When a new connection to IaSQL is issued, the AWS credentials are stored.
 * The keys can be generated from the AWS console for each registered user
 *
 * @example
 * ```sql TheButton[Add new credentials]="Add new credentials"
 *  INSERT INTO aws_credentials (access_key_id, secret_access_key)
 *  VALUES ('AKIA...', '<your secret access key>');
 *
 *  SELECT * FROM aws_credentials;
 * ```
 *
 * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
 * @see https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-account-integration.ts#L62
 * @see https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-account-integration.ts#L95
 *
 */
@Entity()
export class AwsCredentials {
  /**
   * @private
   * Internal ID field for storing accounts
   */
  @PrimaryGeneratedColumn()
  @cloudId
  id: number;

  /**
   * @public
   * AWS Access Key
   */
  @Column()
  accessKeyId: string;

  /**
   * @public
   * AWS Secret Access Key
   */
  @Column()
  secretAccessKey: string;
}

/**
 * Table that will hold all the AWS regions where IaSQL operates.
 * AWS has the concept of a Region, which is a physical location around the
 * world where we cluster data centers.
 *
 * An user can specify which regions are enabled and which region is used as default.
 *
 * @example
 * ```sql
 *  SELECT * FROM aws_regions WHERE is_default = TRUE;
 *  UPDATE aws_regions SET is_default = TRUE WHERE region = 'us-east-1';
 * ```
 * @see https://aws.amazon.com/about-aws/global-infrastructure/regions_az/
 * @see https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-account-integration.ts#L185
 * @see https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-account-integration.ts#L196
 *
 */
@Entity()
export class AwsRegions {
  /**
   * @public
   * AWS region
   */
  @PrimaryColumn()
  @cloudId
  region: string;

  /**
   * @public
   * Identifies the default region. Only one region can be the default one
   */
  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
  }) // TODO: Constrain so exactly one record has true set
  isDefault: boolean;

  /**
   * @public
   * Identifies if the region is enabled to interact with IaSQL or not
   */
  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isEnabled: boolean;
}
