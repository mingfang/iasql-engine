import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from 'typeorm';

import { cloudId } from '../../../services/cloud-id';
import { AwsRegions } from '../../aws_account/entity';

/**
 * Table to manage AWS S3 buckets. Amazon Simple Storage Service (Amazon S3) is an object storage service that offers
 * industry-leading scalability, data availability, security, and performance.
 *
 * A bucket is a container for objects stored in Amazon S3. You can store any number of objects in a bucket and can have up to 100 buckets in your account.
 *
 * @example
 * ```sql TheButton[Creates a bucket]="Creates a bucket"
 * INSERT INTO bucket (name) VALUES ('bucket');
 * ```
 *
 * @see https://github.com/iasql/iasql-engine/blob/b2c2383b73d73f5cdf75c867d334e80cdf40caa1/test/modules/aws-s3-integration.ts#L129
 * @see https://aws.amazon.com/s3/
 */
@Entity()
@Unique('uq_bucket_name_region', ['name', 'region'])
export class Bucket {
  /**
   * @private
   * Auto-incremented ID field
   */
  @PrimaryColumn({
    nullable: false,
    type: 'varchar',
  })

  /**
   * @public
   * Name to identify the bucket
   */
  @cloudId
  name: string;

  /**
   * @public
   * Complex type representing the policy attached to the bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-iam-policies.html
   */
  @Column({
    type: 'json',
    nullable: true,
  })
  policyDocument?: any;

  /**
   * @public
   * Creation date
   */
  @Column({
    nullable: true,
    type: 'timestamp without time zone',
  })
  createdAt?: Date;

  /**
   * @public
   * Region for the bucket
   */
  @Column({
    type: 'character varying',
    nullable: false,
    default: () => 'default_aws_region()',
  })
  @ManyToOne(() => AwsRegions, { nullable: false })
  @JoinColumn({ name: 'region' })
  @cloudId
  region: string;
}
