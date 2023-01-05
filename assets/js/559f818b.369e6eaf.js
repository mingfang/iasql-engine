"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=u(n),p=l,m=c["".concat(s,".").concat(p)]||c[p]||d[p]||a;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(7462),l=(n(7294),n(3905));const a={sidebar_position:4,slug:"/low-level-vs-high-level"},i="Low-Level vs High-Level Modules",r={unversionedId:"concepts/low-level-vs-high-level",id:"concepts/low-level-vs-high-level",title:"Low-Level vs High-Level Modules",description:'Modules in IaSQL allow one to manipulate tables and call database functions that impact the state of their cloud infrastructure. Some of these modules may be described as "low level" and others as "high level", but rather than (just) referring to the features available and the difficulty of using them, these terms have a specific meaning within the IaSQL context.',source:"@site/docs/concepts/low-level-vs-high-level.md",sourceDirName:"concepts",slug:"/low-level-vs-high-level",permalink:"/docs/next/low-level-vs-high-level",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/low-level-vs-high-level"},sidebar:"docs",previous:{title:"IaSQL transactions at a high level",permalink:"/docs/next/transaction"},next:{title:"Deploy containerized app to AWS ECS Fargate using IaSQL",permalink:"/docs/next/fargate"}},s={},u=[],h={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"low-level-vs-high-level-modules"},"Low-Level vs High-Level Modules"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../module"},"Modules in IaSQL"),' allow one to manipulate tables and call database functions that impact the state of their cloud infrastructure. Some of these modules may be described as "low level" and others as "high level", but rather than (just) referring to the features available and the difficulty of using them, these terms have a specific meaning within the IaSQL context.'),(0,l.kt)("p",null,"Consider the following stack diagram:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"     O\n    -|-                      User\n    / \\\n     |\n     |______________\n     |              |\n     v              |\n   ____________     |\n  | High-level |    |\n  |  Modules   |    |        IaSQL\n  |____________|____V_____\n  | Low-level Modules     |\n  |_______________________|\n              |\n              |\n              |\n              v\n             __\n         ___/  \\__\n        /  Cloud  \\              Infrastructure\n        \\_    _   /\n          \\__/ \\_/\n")),(0,l.kt)("p",null,"The user can use both high-level and low-level modules to manipulate their cloud infrastructure, but the high-level modules are built on top of the low-level modules, and only the low-level modules ",(0,l.kt)("em",{parentName:"p"},"actually")," interact with their cloud infrastructure."),(0,l.kt)("p",null,"The high-level modules operate on top of the abstraction layer the low-level modules provide: SQL tables and functions, therefore the high-level modules ",(0,l.kt)("em",{parentName:"p"},"are pure SQL"),"."),(0,l.kt)("p",null,"Therefore, they cannot, on their own, perform arbitrary code execution, but can only perform operations that can be glued together by the low-level modules."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"aws_ecs_simplified")," module is one such example, with the vast majority of code ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine/blob/v0.0.22/src/modules/0.0.22/aws_ecs_simplified/sql/after_install.sql"},"being pure SQL code")," defining a new table and trigger functions to mutate the low-level module tables that it abstracts away for you."),(0,l.kt)("p",null,"For more information on just how nice it is to use a high-level module like ",(0,l.kt)("inlineCode",{parentName:"p"},"aws_ecs_simplified"),", check out ",(0,l.kt)("a",{parentName:"p",href:"https://iasql.com/blog/ecs-simplified"},'this blog post on "ECS, Simplified"'),"."),(0,l.kt)("p",null,"As pure SQL, the barrier to entry in authoring a high-level module is lower, so anyone with the desire can write a high-level module and share it with others, and we hope to make such third-party module installation much simpler soon."),(0,l.kt)("p",null,"The low-level modules are tables and functions that are created by and interface with the IaSQL engine, where module code is written to execute the necessary cloud API calls, such as ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine/blob/v0.0.22/src/modules/0.0.22/aws_ecs_fargate/mappers/cluster.ts"},"this part of the ",(0,l.kt)("inlineCode",{parentName:"a"},"aws_ecs_fargate")," module for the ",(0,l.kt)("inlineCode",{parentName:"a"},"cluster")," table"),"."),(0,l.kt)("p",null,"These low-level modules convert your database changes into API calls, and need to be ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine/blob/v0.0.22/test/modules/aws-ecs-integration.ts"},"thoroughly tested")," for correctness and vetted for trustworthiness that they won't utilize your cloud spending account for nefarious purposes."),(0,l.kt)("p",null,"For that reason, they ",(0,l.kt)("em",{parentName:"p"},"must")," be committed into the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine"},"IaSQL engine repository")," before they can be installed or used, and no third-party low-level modules are allowed."),(0,l.kt)("p",null,"This makes Low-Level modules in IaSQL similar to the built-in functions and libraries of programming languages: something that you'll often use in your day-to-day, but that most will never contribute to, and that's okay."),(0,l.kt)("p",null,'As a slight wrinkle, there are also Low-Level and High-Level Postgres Functions in IaSQL. There is a similar distinction between them, where Low-Level Functions are directly powered by the IaSQL Engine, while High-Level Functions are pure SQL built on top of other functions, tables, etc. However, some Low-Level Functions can be quite "high level" in user experience.'),(0,l.kt)("p",null,'An "obvious" kind of low-level function comes from the ',(0,l.kt)("inlineCode",{parentName:"p"},"aws_s3")," module, where ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine/blob/v0.0.22/src/modules/0.0.22/aws_s3/rpcs/s3_upload_object.ts"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"s3_upload_object")," function"),' allows users to upload new "objects" (files) to an S3 bucket through a SQL statement.'),(0,l.kt)("p",null,"That provides a clear, composable function that you could use in ways never envisioned by the author of the function, such as uploading the results of a SQL query about your infrastructure into an S3 file to be consumed by an internal dashboard."),(0,l.kt)("p",null,"In contrast, the ",(0,l.kt)("inlineCode",{parentName:"p"},"aws_ecr")," module defines the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine/blob/v0.0.22/src/modules/0.0.22/aws_ecr/rpcs/build.ts"},(0,l.kt)("inlineCode",{parentName:"a"},"ecr_build")," function")," that allows one to very simply build any public Git repo (or private Github repo) with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),' defined and store the results in your ECR repository of choice. It is a low-level module but provides an abstracted interface (over a couple of different AWS services) in a "high-level" way. It\'s purpose and arguments being so particular to the task it is designed for it is unlikely to ever be used in a way the author did not envision.'),(0,l.kt)("p",null,"As an example high-level function, we can look at the low-level ",(0,l.kt)("inlineCode",{parentName:"p"},"aws_account")," module (yes, you can define high-level functions in low-level modules, but not vice-versa), where the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iasql/iasql-engine/blob/v0.0.22/src/modules/0.0.22/aws_account/sql/after_install.sql#L1-L8"},(0,l.kt)("inlineCode",{parentName:"a"},"default_aws_account")," function")," has been defined."),(0,l.kt)("p",null,"It is both a convenience function for users to alter their default region without running into a constraint on the ",(0,l.kt)("inlineCode",{parentName:"p"},"aws_regions")," table with multiple regions marked as default, but also as the default value to insert into the ",(0,l.kt)("inlineCode",{parentName:"p"},"region")," column in multiple tables across many low-level modules if the user does not specify which region the resource belongs to. The high-level function simply builds on top of the functionality the low-level ",(0,l.kt)("inlineCode",{parentName:"p"},"aws_regions")," table provides."),(0,l.kt)("p",null,'For most users, the high-level vs low-level divide between modules and functions is unimportant and totally opaque to them, and the "high-level vs low-level" distinction they need is simply the trade-off between configurability and ease-of-use. ',(0,l.kt)("em",{parentName:"p"},"In general")," this will line up with the actual technical distinction, as any cloud functionality ",(0,l.kt)("em",{parentName:"p"},"not")," exposed by the low-level modules can never be recovered with the high-level modules, so the low-level modules ",(0,l.kt)("em",{parentName:"p"},"must")," be as configurable and detailed as possible, while the high-level modules can cut whatever corners they like to provide a more tailored experience."),(0,l.kt)("p",null,"But that does not excuse accidental, needless complexity, and so great care is taken on the design of ",(0,l.kt)("a",{parentName:"p",href:"https://iasql.com/schema/"},"the database schema these modules produce"),". How would someone write a high-level module if they don't understand the low-level modules in the first place?"))}c.isMDXComponent=!0}}]);