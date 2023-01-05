"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,p=function(e,t){if(null==e)return{};var n,o,p={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=i(n),u=p,y=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return n?o.createElement(y,a(a({ref:t},s),{},{components:n})):o.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,a=new Array(l);a[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[m]="string"==typeof e?e:p,a[1]=r;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var o=n(7462),p=(n(7294),n(3905));const l={id:"aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup",title:"Table: codedeploy_deployment_group",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},a=void 0,r={unversionedId:"reference/classes/aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup",id:"reference/classes/aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup",title:"Table: codedeploy_deployment_group",description:"Table to manage AWS CodeDeploy deployment group entities. You can specify one or more deployment groups",source:"@site/docs/reference/classes/aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup",permalink:"/docs/next/reference/classes/aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_codedeploy_entity_deploymentGroup.CodedeployDeploymentGroup",title:"Table: codedeploy_deployment_group",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},d={},i=[{value:"Columns",id:"columns",level:2}],s={toc:i};function m(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Table to manage AWS CodeDeploy deployment group entities. You can specify one or more deployment groups\nfor a CodeDeploy application. Each application deployment uses one of its deployment groups.\nThe deployment group contains settings and configurations used during the deployment."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Manage CodeDeploy deployment groups]="Manage CodeDeploy deployment groups"',"TheButton[Manage":!0,CodeDeploy:!0,deployment:!0,"groups]":'"Manage','groups"':!0},"INSERT INTO codedeploy_deployment_group (application_id, name, role_name) VALUES\n((SELECT id FROM codedeploy_application WHERE name = 'application-name'), 'deployment-group-name', 'role-name');\n\nSELECT * FROM codedeploy_deployment_group WHERE name='deployment-group-name';\n\nDELETE FROM codedeploy_deployment_group WHERE name = 'deployment-group-name'\n")),(0,p.kt)("p",null,(0,p.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Manage%20CodeDeploy%20deployment%20groups/INSERT%20INTO%20codedeploy_deployment_group%20%28application_id%2C%20name%2C%20role_name%29%20VALUES%0A%28%28SELECT%20id%20FROM%20codedeploy_application%20WHERE%20name%20%3D%20%27application-name%27%29%2C%20%27deployment-group-name%27%2C%20%27role-name%27%29%3B%0A%0ASELECT%20*%20FROM%20codedeploy_deployment_group%20WHERE%20name%3D%27deployment-group-name%27%3B%0A%0ADELETE%20FROM%20codedeploy_deployment_group%20WHERE%20name%20%3D%20%27deployment-group-name%27","_blank")},"Manage CodeDeploy deployment groups")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"See"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codedeploy-integration.ts#L419"},"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codedeploy-integration.ts#L419")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups.html"},"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups.html"))),(0,p.kt)("h2",{id:"columns"},"Columns"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"application"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codedeploy_entity_application.CodedeployApplication"},(0,p.kt)("inlineCode",{parentName:"a"},"codedeploy_application"))),(0,p.kt)("p",null,"Reference for the application to where this deployment group belongs"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"deployment","_","config","_","name"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_deploymentGroup.DeploymentConfigType"},(0,p.kt)("inlineCode",{parentName:"a"},"deployment_config_type"))),(0,p.kt)("p",null,"Deployment model to follow"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"deployment","_","group","_","id"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"AWS generated ID for the deployment group"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"deployments"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codedeploy_entity_deployment.CodedeployDeployment"},(0,p.kt)("inlineCode",{parentName:"a"},"codedeploy_deployment")),"[]"),(0,p.kt)("p",null,"List of the current deployments associated to this group"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"ec2","_","tag","_","filters"),": { ",(0,p.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codedeploy_entity_deploymentGroup.EC2TagFilterType"},(0,p.kt)("inlineCode",{parentName:"a"},"ec2_tag_filter_type"))," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,p.kt)("p",null,"Complex type used to filter the instances where the application will be deployed"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"See"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html"},"https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html")),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"Name for the Codedeploy deployment group"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"region"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"Region for the Codedeploy deployment group"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"role"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_iam_entity_role.IamRole"},(0,p.kt)("inlineCode",{parentName:"a"},"iam_role"))),(0,p.kt)("p",null,"Reference for the AWS role used by this deployment group"))}m.isMDXComponent=!0}}]);