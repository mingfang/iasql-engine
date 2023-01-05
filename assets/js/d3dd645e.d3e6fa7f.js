"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"aws_vpc_entity_endpoint_gateway.EndpointGateway",title:"Table: endpoint_gateway",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"reference/classes/aws_vpc_entity_endpoint_gateway.EndpointGateway",id:"reference/classes/aws_vpc_entity_endpoint_gateway.EndpointGateway",title:"Table: endpoint_gateway",description:"Table to manage AWS Gateway endpoints.",source:"@site/docs/reference/classes/aws_vpc_entity_endpoint_gateway.EndpointGateway.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_vpc_entity_endpoint_gateway.EndpointGateway",permalink:"/docs/next/reference/classes/aws_vpc_entity_endpoint_gateway.EndpointGateway",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_vpc_entity_endpoint_gateway.EndpointGateway",title:"Table: endpoint_gateway",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},l={},s=[{value:"Columns",id:"columns",level:2},{value:"Type definition",id:"type-definition",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Table to manage AWS Gateway endpoints.\nGateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.\nGateway endpoints do not enable AWS PrivateLink."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Manage a Gateway endpoint]="Manage a Gateway endpoint"',"TheButton[Manage":!0,a:!0,Gateway:!0,"endpoint]":'"Manage','endpoint"':!0},"INSERT INTO endpoint_gateway (service, vpc_id, tags) SELECT 's3', id, '{\"Name\": \"s3_gateway\"}'\nFROM vpc WHERE is_default = false AND cidr_block = '191.0.0.0/16';\nSELECT * FROM endpoint_gateway WHERE tags ->> 'name' = 's3_gateway';\nDELETE FROM endpoint_gateway WHERE tags ->> 'name' = 's3_gateway';\n")),(0,i.kt)("p",null,(0,i.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Manage%20a%20Gateway%20endpoint/INSERT%20INTO%20endpoint_gateway%20%28service%2C%20vpc_id%2C%20tags%29%20SELECT%20%27s3%27%2C%20id%2C%20%27%7B%22Name%22%3A%20%22s3_gateway%22%7D%27%0AFROM%20vpc%20WHERE%20is_default%20%3D%20false%20AND%20cidr_block%20%3D%20%27191.0.0.0%2F16%27%3B%0ASELECT%20*%20FROM%20endpoint_gateway%20WHERE%20tags%20-%3E%3E%20%27name%27%20%3D%20%27s3_gateway%27%3B%0ADELETE%20FROM%20endpoint_gateway%20WHERE%20tags%20-%3E%3E%20%27name%27%20%3D%20%27s3_gateway%27%3B","_blank")},"Manage a Gateway endpoint")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-vpc-endpoint-gateway-integration.ts#L191L195"},"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-vpc-endpoint-gateway-integration.ts#L191L195")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html"},"https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html"))),(0,i.kt)("h2",{id:"columns"},"Columns"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"policy","_","document"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Complex type representing the policy associated to this gateway"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html"},"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"region"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Reference to the region where it belongs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"route","_","table","_","ids"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Complex type representing the route tables associated with this gateway"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html#gateway-endpoint-routing"},"https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html#gateway-endpoint-routing")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"service"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_vpc_entity_endpoint_gateway.EndpointGatewayService"},(0,i.kt)("inlineCode",{parentName:"a"},"endpoint_gateway_service"))),(0,i.kt)("p",null,"Service type associated to this gateway"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"state"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Current state for the gateway"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"tags"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Complex type to provide identifier tags for the instance"),(0,i.kt)("h4",{id:"type-definition"},"Type definition"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"vpc"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_vpc_entity_vpc.Vpc"},(0,i.kt)("inlineCode",{parentName:"a"},"vpc"))),(0,i.kt)("p",null,"Reference to the VPC associated to this gateway"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"vpc","_","endpoint","_","id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"AWS ID to identify the gateway"))}d.isMDXComponent=!0}}]);