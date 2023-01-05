"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={id:"aws_ec2_rpcs_request.KeyPairRequestRpc",title:"Method: key_pair_request",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"reference/classes/aws_ec2_rpcs_request.KeyPairRequestRpc",id:"reference/classes/aws_ec2_rpcs_request.KeyPairRequestRpc",title:"Method: key_pair_request",description:"Method for requesting a new EC2 keypair",source:"@site/docs/reference/classes/aws_ec2_rpcs_request.KeyPairRequestRpc.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_ec2_rpcs_request.KeyPairRequestRpc",permalink:"/docs/next/reference/classes/aws_ec2_rpcs_request.KeyPairRequestRpc",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_ec2_rpcs_request.KeyPairRequestRpc",title:"Method: key_pair_request",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Method for requesting a new EC2 keypair"),(0,a.kt)("p",null,"Returns following columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: The name for the created key"),(0,a.kt)("li",{parentName:"ul"},"status: OK if the key was created successfully"),(0,a.kt)("li",{parentName:"ul"},"message: Error message in case of failure"),(0,a.kt)("li",{parentName:"ul"},"privateKey: Content of the private key. You will need to store it safely, as it won't be stored and shown again.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Request an EC2 keypair]="Request an EC2 keypair"',"TheButton[Request":!0,an:!0,EC2:!0,"keypair]":'"Request','keypair"':!0},"SELECT * FROM key_pair_request ('key_name', 'us-east-1');\n")),(0,a.kt)("p",null,(0,a.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Request%20an%20EC2%20keypair/SELECT%20*%20FROM%20key_pair_request%20%28%27key_name%27%2C%20%27us-east-1%27%29%3B","_blank")},"Request an EC2 keypair")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-ec2-integration.ts#L269"},"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-ec2-integration.ts#L269")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/ec2/create-key-pair.html"},"https://docs.aws.amazon.com/cli/latest/reference/ec2/create-key-pair.html"))))}p.isMDXComponent=!0}}]);