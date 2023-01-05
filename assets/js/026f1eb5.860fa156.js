"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=l(n),u=r,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={id:"aws_ec2_entity_registered_instance.RegisteredInstance",title:"Table: registered_instance",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"reference/classes/aws_ec2_entity_registered_instance.RegisteredInstance",id:"reference/classes/aws_ec2_entity_registered_instance.RegisteredInstance",title:"Table: registered_instance",description:"Table to track the EC2 instances that are registered into load balancers",source:"@site/docs/reference/classes/aws_ec2_entity_registered_instance.RegisteredInstance.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_ec2_entity_registered_instance.RegisteredInstance",permalink:"/docs/next/reference/classes/aws_ec2_entity_registered_instance.RegisteredInstance",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_ec2_entity_registered_instance.RegisteredInstance",title:"Table: registered_instance",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},c={},l=[{value:"Columns",id:"columns",level:2}],p={toc:l};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Table to track the EC2 instances that are registered into load balancers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Associate an EC2 instance to a load balancer]="Associate an EC2 instance to a load balancer"',"TheButton[Associate":!0,an:!0,EC2:!0,instance:!0,to:!0,a:!0,load:!0,"balancer]":'"Associate','balancer"':!0},"INSERT INTO registered_instance (instance, target_group_id) SELECT (SELECT id FROM instance WHERE tags ->> 'name' = 'test-vm'), (SELECT id FROM target_group WHERE target_group_name = 'test-target-group');\n\nUPDATE registered_instance SET port = '80' FROM instance WHERE instance.id = registered_instance.instance AND target_group_id = (SELECT id FROM target_group WHERE target_group_name = 'test-target-group')\nAND instance.tags ->> 'name' = 'test-vm';\n\nDELETE FROM registered_instance USING instance WHERE instance.tags ->> 'name' = 'test-vm' AND instance.id = registered_instance.instance;\n")),(0,r.kt)("p",null,(0,r.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Associate%20an%20EC2%20instance%20to%20a%20load%20balancer/INSERT%20INTO%20registered_instance%20%28instance%2C%20target_group_id%29%20SELECT%20%28SELECT%20id%20FROM%20instance%20WHERE%20tags%20-%3E%3E%20%27name%27%20%3D%20%27test-vm%27%29%2C%20%28SELECT%20id%20FROM%20target_group%20WHERE%20target_group_name%20%3D%20%27test-target-group%27%29%3B%0A%0AUPDATE%20registered_instance%20SET%20port%20%3D%20%2780%27%20FROM%20instance%20WHERE%20instance.id%20%3D%20registered_instance.instance%20AND%20target_group_id%20%3D%20%28SELECT%20id%20FROM%20target_group%20WHERE%20target_group_name%20%3D%20%27test-target-group%27%29%0AAND%20instance.tags%20-%3E%3E%20%27name%27%20%3D%20%27test-vm%27%3B%0A%0ADELETE%20FROM%20registered_instance%20USING%20instance%20WHERE%20instance.tags%20-%3E%3E%20%27name%27%20%3D%20%27test-vm%27%20AND%20instance.id%20%3D%20registered_instance.instance%3B","_blank")},"Associate an EC2 instance to a load balancer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-ec2-integration.ts#L614"},"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-ec2-integration.ts#L614")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html"))),(0,r.kt)("h2",{id:"columns"},"Columns"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"instance"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_ec2_entity_instance.Instance"},(0,r.kt)("inlineCode",{parentName:"a"},"instance"))),(0,r.kt)("p",null,"Reference to the instance to associate with the specific load balancer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"port"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Port to expose in that association"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"region"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Region for the VM association"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"target","_","group"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_elb_entity_target_group.TargetGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"target_group"))),(0,r.kt)("p",null,"Reference to the target group for the association"))}g.isMDXComponent=!0}}]);