"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _=n.createContext({}),p=function(e){var t=n.useContext(_),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(_.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,_=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),i=p(a),d=r,m=i["".concat(_,".").concat(d)]||i[d]||u[d]||s;return a?n.createElement(m,c(c({ref:t},o),{},{components:a})):n.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=d;var l={};for(var _ in t)hasOwnProperty.call(t,_)&&(l[_]=t[_]);l.originalType=e,l[i]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<s;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>c,default:()=>i,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={id:"sql",title:"IaSQL documentation",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"reference/sql",id:"reference/sql",title:"IaSQL documentation",description:"aws_account",source:"@site/docs/reference/sql.md",sourceDirName:"reference",slug:"/reference/sql",permalink:"/docs/next/reference/sql",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"sql",title:"IaSQL documentation",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"Deploy containerized app to ECS Fargate using IaSQL on Django (Python)",permalink:"/docs/next/django"}},_={},p=[{value:"aws_account",id:"aws_account",level:3},{value:"aws_acm",id:"aws_acm",level:3},{value:"aws_api_gateway",id:"aws_api_gateway",level:3},{value:"aws_appsync",id:"aws_appsync",level:3},{value:"aws_cloudfront",id:"aws_cloudfront",level:3},{value:"aws_cloudwatch",id:"aws_cloudwatch",level:3},{value:"aws_codebuild",id:"aws_codebuild",level:3},{value:"aws_codedeploy",id:"aws_codedeploy",level:3},{value:"aws_codepipeline",id:"aws_codepipeline",level:3},{value:"aws_dynamo",id:"aws_dynamo",level:3},{value:"aws_ec2",id:"aws_ec2",level:3},{value:"aws_ec2_metadata",id:"aws_ec2_metadata",level:3},{value:"aws_ecr",id:"aws_ecr",level:3},{value:"aws_ecs_fargate",id:"aws_ecs_fargate",level:3},{value:"aws_elasticache",id:"aws_elasticache",level:3},{value:"aws_elb",id:"aws_elb",level:3},{value:"aws_iam",id:"aws_iam",level:3},{value:"aws_lambda",id:"aws_lambda",level:3},{value:"aws_memory_db",id:"aws_memory_db",level:3},{value:"aws_rds",id:"aws_rds",level:3},{value:"aws_route53",id:"aws_route53",level:3},{value:"aws_s3",id:"aws_s3",level:3},{value:"aws_secrets_manager",id:"aws_secrets_manager",level:3},{value:"aws_security_group",id:"aws_security_group",level:3},{value:"aws_vpc",id:"aws_vpc",level:3},{value:"iasql_functions",id:"iasql_functions",level:3}],o={toc:p};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"aws_account"},"aws_account"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_account_entity.AwsCredentials"},"aws_credentials")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_account_entity.AwsRegions"},"aws_regions")),(0,r.kt)("h3",{id:"aws_acm"},"aws_acm"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_acm_entity_certificate.certificateRenewalEligibilityEnum"},"certificate_renewal_eligibility")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_acm_entity_certificate.certificateStatusEnum"},"certificate_status")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_acm_entity_certificate.certificateTypeEnum"},"certificate_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_acm_entity_certificate.Certificate"},"certificate")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_acm_rpcs_import.CertificateImportRpc"},"certificate_import")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_acm_rpcs_request.CertificateRequestRpc"},"certificate_request")),(0,r.kt)("h3",{id:"aws_api_gateway"},"aws_api_gateway"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_api_gateway_entity_api.Protocol"},"protocol")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_api_gateway_entity_api.Api"},"api")),(0,r.kt)("h3",{id:"aws_appsync"},"aws_appsync"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_appsync_entity_graphql_api.AuthenticationType"},"authentication_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_appsync_entity_graphql_api.DefaultAction"},"default_action")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_appsync_entity_graphql_api.GraphqlApi"},"graphql_api")),(0,r.kt)("h3",{id:"aws_cloudfront"},"aws_cloudfront"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_cloudfront_entity_distribution.originProtocolPolicyEnum"},"origin_protocol_policy")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_cloudfront_entity_distribution.viewerProtocolPolicyEnum"},"viewer_protocol_policy")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_cloudfront_entity_distribution.Distribution"},"distribution")),(0,r.kt)("h3",{id:"aws_cloudwatch"},"aws_cloudwatch"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_cloudwatch_entity_log_group.LogGroup"},"log_group")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_cloudwatch_rpcs_log_group_tail.LogGroupTailRpc"},"log_group_tail")),(0,r.kt)("h3",{id:"aws_codebuild"},"aws_codebuild"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_build.BuildStatus"},"build_status")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codebuild_entity_build.CodebuildBuildList"},"codebuild_build_list")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_project.ComputeType"},"compute_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_project.EnvironmentType"},"environment_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_project.EnvironmentVariableType"},"environment_variable_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_project.SourceType"},"source_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codebuild_entity_project.CodebuildProject"},"codebuild_project")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_source_credentials.AuthType"},"auth_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codebuild_entity_source_credentials.SourceCredentialsList"},"source_credentials_list")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_rpcs_import_source_credential.ValidAuthTypes"},"valid_auth_types")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_rpcs_import_source_credential.ValidServerTypes"},"valid_server_types")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codebuild_rpcs_import_source_credential.ImportSourceCredentialRpc"},"import_source_credential")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codebuild_rpcs_start_build.StartBuildRPC"},"start_build")),(0,r.kt)("h3",{id:"aws_codedeploy"},"aws_codedeploy"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_application.ComputePlatform"},"compute_platform")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codedeploy_entity_application.CodedeployApplication"},"codedeploy_application")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_deployment.DeploymentStatusEnum"},"deployment_status")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_deployment.RevisionType"},"revision_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codedeploy_entity_deployment.CodedeployDeployment"},"codedeploy_deployment")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_deploymentGroup.DeploymentConfigType"},"deployment_config_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_deploymentGroup.EC2TagFilterType"},"ec2_tag_filter_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup"},"codedeploy_deployment_group")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codedeploy_rpcs_start_deploy.StartDeployRPC"},"start_deploy")),(0,r.kt)("h3",{id:"aws_codepipeline"},"aws_codepipeline"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codepipeline_entity_pipeline_declaration.ActionCategory"},"action_category")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codepipeline_entity_pipeline_declaration.PipelineDeclaration"},"pipeline_declaration")),(0,r.kt)("h3",{id:"aws_dynamo"},"aws_dynamo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_dynamo_entity.TableClass"},"table_class")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_dynamo_entity.DynamoTable"},"dynamo_table")),(0,r.kt)("h3",{id:"aws_ec2"},"aws_ec2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_entity_general_purpose_volume.GeneralPurposeVolumeType"},"general_purpose_volume_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_entity_general_purpose_volume.VolumeState"},"volume_state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_entity_general_purpose_volume.GeneralPurposeVolume"},"general_purpose_volume")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_entity_instance.State"},"state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_entity_instance.Instance"},"instance")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_entity_key_pair.KeyPair"},"key_pair")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_entity_registered_instance.RegisteredInstance"},"registered_instance")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_rpcs_import.KeyPairImportRpc"},"key_pair_import")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_rpcs_request.KeyPairRequestRpc"},"key_pair_request")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_metadata_entity_instance_metadata.Architecture"},"architecture")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_metadata_entity_instance_metadata.RootDeviceType"},"root_device_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_metadata_entity_instance_metadata.InstanceMetadata"},"instance_metadata")),(0,r.kt)("h3",{id:"aws_ec2_metadata"},"aws_ec2_metadata"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_metadata_entity_instance_metadata.Architecture"},"architecture")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ec2_metadata_entity_instance_metadata.RootDeviceType"},"root_device_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_metadata_entity_instance_metadata.InstanceMetadata"},"instance_metadata")),(0,r.kt)("h3",{id:"aws_ecr"},"aws_ecr"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecr_entity_public_repository.PublicRepository"},"public_repository")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ecr_entity_repository.ImageTagMutability"},"image_tag_mutability")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecr_entity_repository.Repository"},"repository")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecr_entity_repository_image.RepositoryImage"},"repository_image")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecr_entity_repository_policy.RepositoryPolicy"},"repository_policy")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecr_rpcs_build.EcrBuildRpc"},"ecr_build")),(0,r.kt)("h3",{id:"aws_ecs_fargate"},"aws_ecs_fargate"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecs_fargate_entity_cluster.Cluster"},"cluster")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ecs_fargate_entity_container_definition.TransportProtocol"},"transport_protocol")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecs_fargate_entity_container_definition.ContainerDefinition"},"container_definition")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ecs_fargate_entity_service.AssignPublicIp"},"assign_public_ip")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecs_fargate_entity_service.Service"},"service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ecs_fargate_entity_task_definition.CpuMemCombination"},"cpu_mem_combination")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_ecs_fargate_entity_task_definition.TaskDefinitionStatus"},"task_definition_status")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecs_fargate_entity_task_definition.TaskDefinition"},"task_definition")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ecs_fargate_rpcs_deploy_service.DeployServiceRPC"},"deploy_service")),(0,r.kt)("h3",{id:"aws_elasticache"},"aws_elasticache"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elasticache_entity_cache_cluster.Engine"},"engine")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_elasticache_entity_cache_cluster.CacheCluster"},"cache_cluster")),(0,r.kt)("h3",{id:"aws_elb"},"aws_elb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_listener.ActionTypeEnum"},"action_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_elb_entity_listener.Listener"},"listener")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_load_balancer.IpAddressType"},"ip_address_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_load_balancer.LoadBalancerSchemeEnum"},"load_balancer_scheme")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_load_balancer.LoadBalancerStateEnum"},"load_balancer_state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_load_balancer.LoadBalancerTypeEnum"},"load_balancer_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_elb_entity_load_balancer.LoadBalancer"},"load_balancer")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_target_group.ProtocolEnum"},"protocol")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_target_group.ProtocolVersionEnum"},"protocol_version")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_target_group.TargetGroupIpAddressTypeEnum"},"target_group_ip_address_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elb_entity_target_group.TargetTypeEnum"},"target_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_elb_entity_target_group.TargetGroup"},"target_group")),(0,r.kt)("h3",{id:"aws_iam"},"aws_iam"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_iam_entity_access_key.accessKeyStatusEnum"},"access_key_status")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_iam_entity_access_key.AccessKey"},"access_key")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_iam_entity_role.IamRole"},"iam_role")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_iam_entity_user.IamUser"},"iam_user")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_iam_rpcs_request.AccessKeyRequestRpc"},"access_key_request")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_iam_rpcs_set_password.SetUserPasswordRequestRpc"},"set_user_password_request")),(0,r.kt)("h3",{id:"aws_lambda"},"aws_lambda"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_lambda_entity_lambda_function.Architecture"},"architecture")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_lambda_entity_lambda_function.PackageType"},"package_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_lambda_entity_lambda_function.Runtime"},"runtime")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_lambda_entity_lambda_function.LambdaFunction"},"lambda_function")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_lambda_rpcs_invoke.LambdaFunctionInvokeRpc"},"lambda_function_invoke")),(0,r.kt)("h3",{id:"aws_memory_db"},"aws_memory_db"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_memory_db_entity_memory_db_cluster.NodeTypeEnum"},"node_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_memory_db_entity_memory_db_cluster.MemoryDBCluster"},"memory_db_cluster")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_memory_db_entity_subnet_group.SubnetGroup"},"subnet_group")),(0,r.kt)("h3",{id:"aws_rds"},"aws_rds"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_rds_entity_parameter_group.ParameterGroupFamily"},"parameter_group_family")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_rds_entity_parameter_group.ParameterGroup"},"parameter_group")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_rds_entity_rds.RDS"},"RDS")),(0,r.kt)("h3",{id:"aws_route53"},"aws_route53"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_route53_entity_alias_target.AliasTarget"},"alias_target")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_route53_entity_hosted_zone.HostedZone"},"hosted_zone")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_route53_entity_resource_records_set.RecordType"},"record_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_route53_entity_resource_records_set.ResourceRecordSet"},"resource_record_set")),(0,r.kt)("h3",{id:"aws_s3"},"aws_s3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_s3_entity_bucket.Bucket"},"bucket")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_s3_entity_bucket_object.BucketObject"},"bucket_object")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_s3_entity_bucket_website.BucketWebsite"},"bucket_website")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_s3_entity_public_access_block.PublicAccessBlock"},"public_access_block")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_s3_rpcs_s3_upload_object.S3UploadObjectRpc"},"s3_upload_object")),(0,r.kt)("h3",{id:"aws_secrets_manager"},"aws_secrets_manager"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_secrets_manager_entity_secret.Secret"},"secret")),(0,r.kt)("h3",{id:"aws_security_group"},"aws_security_group"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_security_group_entity.SecurityGroup"},"security_group")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_security_group_entity.SecurityGroupRule"},"security_group_rule")),(0,r.kt)("h3",{id:"aws_vpc"},"aws_vpc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_availability_zone.AvailabilityZone"},"availability_zone")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_elastic_ip.ElasticIp"},"elastic_ip")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_endpoint_gateway.EndpointGatewayService"},"endpoint_gateway_service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_endpoint_gateway.EndpointGateway"},"endpoint_gateway")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_endpoint_interface.EndpointInterfaceService"},"endpoint_interface_service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_endpoint_interface.EndpointInterface"},"endpoint_interface")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_nat_gateway.ConnectivityType"},"connectivity_type")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_nat_gateway.NatGatewayState"},"nat_gateway_state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_nat_gateway.NatGateway"},"nat_gateway")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_peering_connection.PeeringConnectionState"},"peering_connection_state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_peering_connection.PeeringConnection"},"peering_connection")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_route.Route"},"route")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_route_table.RouteTable"},"route_table")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_route_table_association.RouteTableAssociation"},"route_table_association")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_subnet.SubnetState"},"subnet_state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_subnet.Subnet"},"subnet")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_vpc.VpcState"},"vpc_state")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_vpc.Vpc"},"vpc")),(0,r.kt)("h3",{id:"iasql_functions"},"iasql_functions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_begin.IasqlBegin"},"iasql_begin")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_commit.IasqlCommit"},"iasql_commit")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_get_errors.IasqlGetErrors"},"iasql_get_errors")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_install.IasqlInstall"},"iasql_install")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_preview.IasqlPreview"},"iasql_preview")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_rollback.IasqlRollback"},"iasql_rollback")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/iasql_functions_rpcs_iasql_uninstall.IasqlUninstall"},"iasql_uninstall")))}i.isMDXComponent=!0}}]);