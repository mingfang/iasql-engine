"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,slug:"/vpc"},o="AWS VPC",l={unversionedId:"sample-queries/aws_vpc",id:"version-0.0.22/sample-queries/aws_vpc",title:"AWS VPC",description:"Create a VPC and a subnet within it",source:"@site/versioned_docs/version-0.0.22/sample-queries/aws_vpc.md",sourceDirName:"sample-queries",slug:"/vpc",permalink:"/docs/vpc",draft:!1,tags:[],version:"0.0.22",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/vpc"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"AWS Security Group",permalink:"/docs/aws_security_group"}},c={},s=[{value:"Create a VPC and a subnet within it",id:"create-a-vpc-and-a-subnet-within-it",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-vpc"},"AWS VPC"),(0,r.kt)("h2",{id:"create-a-vpc-and-a-subnet-within-it"},"Create a VPC and a subnet within it"),(0,r.kt)("p",null,"Install the AWS virtual private cloud (VPC) module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM iasql_install('aws_vpc');\n")),(0,r.kt)("p",null,"Create an isolated VPC in which to create resources via the ",(0,r.kt)("a",{parentName:"p",href:"https://dbdocs.io/iasql/iasql?table=vpc&schema=public&view=table_structure"},(0,r.kt)("inlineCode",{parentName:"a"},"vpc"))," table. Read more about VPC ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html"},"here"),". To create a VPC, specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO vpc (cidr_block)\nVALUES ('192.168.0.0/16');\n")),(0,r.kt)("p",null,"Now ",(0,r.kt)("inlineCode",{parentName:"p"},"apply")," the VPC change to your cloud account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM iasql_apply();\n")),(0,r.kt)("p",null,"A VPC spans all of the Availability Zones in an AWS Region. After you create a VPC, you can add one or more subnets in each Availability Zone. The snippet below creates a non-default subnet in one of the availability zones within the newly created VPC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Create VPC subnet]="Run SQL"',"TheButton[Create":!0,VPC:!0,"subnet]":'"Run','SQL"':!0},"INSERT INTO subnet (availability_zone, vpc_id, cidr_block)\nSELECT (SELECT * FROM availability_zone LIMIT 1), id, '192.168.0.0/16'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.168.0.0/16';\n")),(0,r.kt)("p",null,(0,r.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Create%20VPC%20subnet/INSERT%20INTO%20subnet%20%28availability_zone%2C%20vpc_id%2C%20cidr_block%29%0ASELECT%20%28SELECT%20*%20FROM%20availability_zone%20LIMIT%201%29%2C%20id%2C%20%27192.168.0.0%2F16%27%0AFROM%20vpc%0AWHERE%20is_default%20%3D%20false%0AAND%20cidr_block%20%3D%20%27192.168.0.0%2F16%27%3B","_blank")},"Run SQL")))}u.isMDXComponent=!0}}]);