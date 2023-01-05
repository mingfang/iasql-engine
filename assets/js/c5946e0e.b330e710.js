"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),b=l,m=c["".concat(d,".").concat(b)]||c[b]||p[b]||a;return n?i.createElement(m,r(r({ref:t},s),{},{components:n})):i.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=b;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),l=(n(7294),n(3905));const a={id:"aws_codebuild_entity_build.CodebuildBuildList",title:"Table: codebuild_build_list",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"reference/classes/aws_codebuild_entity_build.CodebuildBuildList",id:"reference/classes/aws_codebuild_entity_build.CodebuildBuildList",title:"Table: codebuild_build_list",description:"Table to manage AWS CodeBuild build entities. AWS CodeBuild is a fully managed continuous integration service that",source:"@site/docs/reference/classes/aws_codebuild_entity_build.CodebuildBuildList.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_codebuild_entity_build.CodebuildBuildList",permalink:"/docs/next/reference/classes/aws_codebuild_entity_build.CodebuildBuildList",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_codebuild_entity_build.CodebuildBuildList",title:"Table: codebuild_build_list",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},d={},u=[{value:"Columns",id:"columns",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Table to manage AWS CodeBuild build entities. AWS CodeBuild is a fully managed continuous integration service that\ncompiles source code, runs tests, and produces ready-to-deploy software packages."),(0,l.kt)("p",null,"A build represents a set of actions performed by AWS CodeBuild to create output artifacts (for example, a JAR file)\nbased on a set of input artifacts (for example, a collection of Java class files)."),(0,l.kt)("p",null,"This table can only be used to check the existing builds, and delete them. The main builds are created\nvia a CodeBuild project."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Manage CodeBuild builds]="Manage CodeBuild builds"',"TheButton[Manage":!0,CodeBuild:!0,"builds]":'"Manage','builds"':!0},"SELECT * FROM codebuild_build_list WHERE project_name = 'build_project_name' and build_status = 'FAILED';\nDELETE FROM codebuild_build_list WHERE project_name = 'build_project_name';\n")),(0,l.kt)("p",null,(0,l.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Manage%20CodeBuild%20builds/SELECT%20*%20FROM%20codebuild_build_list%20WHERE%20project_name%20%3D%20%27build_project_name%27%20and%20build_status%20%3D%20%27FAILED%27%3B%0ADELETE%20FROM%20codebuild_build_list%20WHERE%20project_name%20%3D%20%27build_project_name%27%3B","_blank")},"Manage CodeBuild builds")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codebuild-integration.ts#L341"},"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codebuild-integration.ts#L341")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/codebuild/latest/userguide/builds-working.html"},"https://docs.aws.amazon.com/codebuild/latest/userguide/builds-working.html"))),(0,l.kt)("h2",{id:"columns"},"Columns"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"arn"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"AWS ARN to identify the build"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"aws","_","id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Internal ID to identify the build"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"build","_","number"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The number of the build. For each project, the buildNumber of its first build is 1. The buildNumber of each subsequent build is incremented by 1. If a build is deleted, the buildNumber of other builds does not change."),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"build","_","status"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_codebuild_entity_build.BuildStatus"},(0,l.kt)("inlineCode",{parentName:"a"},"build_status"))),(0,l.kt)("p",null,"Current status for the build"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"end","_","time"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"date")),(0,l.kt)("p",null,"Time when the build finished"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"project"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference/classes/aws_codebuild_entity_project.CodebuildProject"},(0,l.kt)("inlineCode",{parentName:"a"},"codebuild_project"))),(0,l.kt)("p",null,"Associated project for the build. AWS allows builds to exist once the project has been deleted"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"region"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Region for the certificate creation"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"start","_","time"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"date")),(0,l.kt)("p",null,"Time when the build was started"))}c.isMDXComponent=!0}}]);