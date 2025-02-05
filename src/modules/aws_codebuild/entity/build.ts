import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from 'typeorm';

import { cloudId } from '../../../services/cloud-id';
import { AwsRegions } from '../../aws_account/entity';
import { CodebuildProject } from './project';

/**
 * @enum
 * Different status for a build. Only SUCCEEDED builds can be considered as valid
 * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_Build.html
 */
export enum BuildStatus {
  FAILED = 'FAILED',
  FAULT = 'FAULT',
  IN_PROGRESS = 'IN_PROGRESS',
  STOPPED = 'STOPPED',
  SUCCEEDED = 'SUCCEEDED',
  TIMED_OUT = 'TIMED_OUT',
}

/**
 * Table to manage AWS CodeBuild build entities. AWS CodeBuild is a fully managed continuous integration service that
 * compiles source code, runs tests, and produces ready-to-deploy software packages.
 *
 * A build represents a set of actions performed by AWS CodeBuild to create output artifacts (for example, a JAR file)
 * based on a set of input artifacts (for example, a collection of Java class files).
 *
 * This table can only be used to check the existing builds, and delete them. The main builds are created
 * via a CodeBuild project.
 *
 * @example
 * ```sql TheButton[Manage CodeBuild builds]="Manage CodeBuild builds"
 * SELECT * FROM codebuild_build_list WHERE project_name = 'build_project_name' and build_status = 'FAILED';
 * DELETE FROM codebuild_build_list WHERE project_name = 'build_project_name';
 * ```
 *
 * @see https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codebuild-integration.ts#L341
 * @see https://docs.aws.amazon.com/codebuild/latest/userguide/builds-working.html
 *
 */
@Entity()
@Unique('uq_codebuildlist_id_region', ['id', 'region'])
@Unique('uq_codebuildlist_name_region', ['awsId', 'region'])
export class CodebuildBuildList {
  /**
   * @private
   * Auto-incremented ID field
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * @public
   * Internal ID to identify the build
   */
  @Column()
  @cloudId
  awsId: string;

  /**
   * @public
   * AWS ARN to identify the build
   */
  @Column({
    nullable: true,
  })
  arn: string;

  /**
   * @public
   * The number of the build. For each project, the buildNumber of its first build is 1. The buildNumber of each subsequent build is incremented by 1. If a build is deleted, the buildNumber of other builds does not change.
   */
  @Column({
    nullable: true,
  })
  buildNumber?: number;

  /**
   * @public
   * Associated project for the build. AWS allows builds to exist once the project has been deleted
   */
  @ManyToOne(() => CodebuildProject, {
    eager: true,
    nullable: true,
  })
  @JoinColumn([
    {
      name: 'project_name',
      referencedColumnName: 'projectName',
    },
    {
      name: 'region',
      referencedColumnName: 'region',
    },
  ])
  project: CodebuildProject;

  /**
   * @public
   * Current status for the build
   */
  @Column({
    type: 'enum',
    enum: BuildStatus,
  })
  buildStatus: BuildStatus;

  /**
   * @public
   * Time when the build finished
   */
  @Column({
    type: 'timestamp without time zone',
    nullable: true,
  })
  endTime?: Date;

  /**
   * @public
   * Time when the build was started
   */
  @Column({
    type: 'timestamp without time zone',
    nullable: true,
  })
  startTime?: Date;

  /**
   * @public
   * Region for the certificate creation
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
