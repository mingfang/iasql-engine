"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3766],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),p=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(u.Provider,{value:r},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,y=l["".concat(u,".").concat(m)]||l[m]||g[m]||a;return t?o.createElement(y,i(i({ref:r},c),{},{components:t})):o.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2261:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:2,slug:"/aws_security_group"},i="AWS Security Group",s={unversionedId:"sample-queries/aws_security_group",id:"sample-queries/aws_security_group",title:"AWS Security Group",description:"Create a security group",source:"@site/docs/sample-queries/aws_security_group.md",sourceDirName:"sample-queries",slug:"/aws_security_group",permalink:"/docs/next/aws_security_group",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/aws_security_group"},sidebar:"docs",previous:{title:"AWS VPC",permalink:"/docs/next/vpc"},next:{title:"AWS IAM",permalink:"/docs/next/aws_iam"}},u={},p=[{value:"Create a security group",id:"create-a-security-group",level:2}],c={toc:p};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-security-group"},"AWS Security Group"),(0,n.kt)("h2",{id:"create-a-security-group"},"Create a security group"),(0,n.kt)("p",null,"Install the AWS security group module"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM iasql_install('aws_security_group');\n")),(0,n.kt)("p",null,"An AWS ",(0,n.kt)("inlineCode",{parentName:"p"},"security_group")," controls the traffic that is allowed to reach and leave the cloud resources that it is associated with via ",(0,n.kt)("inlineCode",{parentName:"p"},"security_group_rules"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO security_group (description, group_name)\nVALUES ('Security Group from IaSQL sample', 'iasql-sample-sg');\n")),(0,n.kt)("p",null,"Now create two security group rules to allow SSH (port 22) and HTTPS (port 443) and associate them with the security group created above using a foreign key relationship. Read more about security group rule configuration ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules"},"here")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:"TheButton",TheButton:!0},"INSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\nSELECT true, 'tcp', 443, 443, '0.0.0.0/8', 'iasqlsamplerule', id\nFROM security_group\nWHERE group_name = 'iasql-sample-sg';\n\nINSERT INTO security_group_rule (is_egress, ip_protocol, from_port, to_port, cidr_ipv6, description, security_group_id)\nSELECT false, 'tcp', 22, 22, '::/8', 'iasqlsamplerule2', id\nFROM security_group\nWHERE group_name = 'iasql-sample-sg';\n")),(0,n.kt)("p",null,(0,n.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/INSERT%20INTO%20security_group_rule%20%28is_egress%2C%20ip_protocol%2C%20from_port%2C%20to_port%2C%20cidr_ipv4%2C%20description%2C%20security_group_id%29%0ASELECT%20true%2C%20%27tcp%27%2C%20443%2C%20443%2C%20%270.0.0.0%2F8%27%2C%20%27iasqlsamplerule%27%2C%20id%0AFROM%20security_group%0AWHERE%20group_name%20%3D%20%27iasql-sample-sg%27%3B%0A%0AINSERT%20INTO%20security_group_rule%20%28is_egress%2C%20ip_protocol%2C%20from_port%2C%20to_port%2C%20cidr_ipv6%2C%20description%2C%20security_group_id%29%0ASELECT%20false%2C%20%27tcp%27%2C%2022%2C%2022%2C%20%27%3A%3A%2F8%27%2C%20%27iasqlsamplerule2%27%2C%20id%0AFROM%20security_group%0AWHERE%20group_name%20%3D%20%27iasql-sample-sg%27%3B","_blank")},"Run SQL")))}l.isMDXComponent=!0}}]);