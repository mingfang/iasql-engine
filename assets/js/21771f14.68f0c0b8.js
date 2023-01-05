"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},44:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={id:"aws_codebuild_rpcs_start_build.StartBuildRPC",title:"Method: start_build",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"reference/classes/aws_codebuild_rpcs_start_build.StartBuildRPC",id:"reference/classes/aws_codebuild_rpcs_start_build.StartBuildRPC",title:"Method: start_build",description:"Method for triggering the build of a project",source:"@site/docs/reference/classes/aws_codebuild_rpcs_start_build.StartBuildRPC.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_codebuild_rpcs_start_build.StartBuildRPC",permalink:"/docs/next/reference/classes/aws_codebuild_rpcs_start_build.StartBuildRPC",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_codebuild_rpcs_start_build.StartBuildRPC",title:"Method: start_build",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},s={},u=[{value:"Columns",id:"columns",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Method for triggering the build of a project"),(0,a.kt)("p",null,"Returns following columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"name: the name of the project that was built")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"status: OK if the build was started successfully")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"message: Error message in case of failure"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Launch CodeBuild project build]="Launch CodeBuild project build"',"TheButton[Launch":!0,CodeBuild:!0,project:!0,"build]":'"Launch','build"':!0},"  SELECT * FROM start_build('project_name', 'us-east-2');\n")),(0,a.kt)("p",null,(0,a.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Launch%20CodeBuild%20project%20build/%20%20SELECT%20*%20FROM%20start_build%28%27project_name%27%2C%20%27us-east-2%27%29%3B","_blank")},"Launch CodeBuild project build")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codebuild-integration.ts#L313"},"https://github.com/iasql/iasql-engine/blob/main/test/modules/aws-codebuild-integration.ts#L313")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/codebuild/start-build.html"},"https://docs.aws.amazon.com/cli/latest/reference/codebuild/start-build.html"))),(0,a.kt)("h2",{id:"columns"},"Columns"))}d.isMDXComponent=!0}}]);