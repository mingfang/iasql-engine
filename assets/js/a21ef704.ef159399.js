"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||c;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<c;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const c={id:"aws_elasticache_entity_cache_cluster.CacheCluster",title:"Table: cache_cluster",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"reference/classes/aws_elasticache_entity_cache_cluster.CacheCluster",id:"reference/classes/aws_elasticache_entity_cache_cluster.CacheCluster",title:"Table: cache_cluster",description:"Table to manage ElastiCache clusters. A cluster is a collection of one or more cache nodes, all of which run an instance of the Redis",source:"@site/docs/reference/classes/aws_elasticache_entity_cache_cluster.CacheCluster.md",sourceDirName:"reference/classes",slug:"/reference/classes/aws_elasticache_entity_cache_cluster.CacheCluster",permalink:"/docs/next/reference/classes/aws_elasticache_entity_cache_cluster.CacheCluster",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"aws_elasticache_entity_cache_cluster.CacheCluster",title:"Table: cache_cluster",displayed_sidebar:"docs",sidebar_label:"SQL",sidebar_position:0,custom_edit_url:null},sidebar:"docs"},o={},i=[{value:"Columns",id:"columns",level:2}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Table to manage ElastiCache clusters. A cluster is a collection of one or more cache nodes, all of which run an instance of the Redis\ncache engine software. When you create a cluster, you specify the engine and version for all of the nodes to use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'TheButton[Manage an ElastiCache cluster]="Manage an ElastiCache cluster"',"TheButton[Manage":!0,an:!0,ElastiCache:!0,"cluster]":'"Manage','cluster"':!0},"INSERT INTO cache_cluster (cluster_id, node_type, engine, num_nodes) VALUES ('cluster_name', 'cache.t1.micro', 'redis', 1);\nSELECT * FROM cache_cluster WHERE cluster_id='cluster_name';\nDELETE FROM cache_cluster WHERE cluster_id = 'cluster_name';\n")),(0,r.kt)("p",null,(0,r.kt)("button",{className:"button button--primary button--lg margin-bottom--lg",onClick:()=>window.open("https://app.iasql.com/#/button/Manage%20an%20ElastiCache%20cluster/INSERT%20INTO%20cache_cluster%20%28cluster_id%2C%20node_type%2C%20engine%2C%20num_nodes%29%20VALUES%20%28%27cluster_name%27%2C%20%27cache.t1.micro%27%2C%20%27redis%27%2C%201%29%3B%0ASELECT%20*%20FROM%20cache_cluster%20WHERE%20cluster_id%3D%27cluster_name%27%3B%0ADELETE%20FROM%20cache_cluster%20WHERE%20cluster_id%20%3D%20%27cluster_name%27%3B","_blank")},"Manage an ElastiCache cluster")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iasql/iasql-engine/blob/b2c2383b73d73f5cdf75c867d334e80cdf40caa1/test/modules/aws-elasticache-integration.ts#L146"},"https://github.com/iasql/iasql-engine/blob/b2c2383b73d73f5cdf75c867d334e80cdf40caa1/test/modules/aws-elasticache-integration.ts#L146")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Clusters.html"},"https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Clusters.html"))),(0,r.kt)("h2",{id:"columns"},"Columns"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cluster","_","id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Internal AWS ID for the cluster"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"engine"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/enums/aws_elasticache_entity_cache_cluster.Engine"},(0,r.kt)("inlineCode",{parentName:"a"},"engine"))),(0,r.kt)("p",null,"Engine to use for the cluster"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"node","_","type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Node type to use as a base for the cluster deployment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html"},"https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"num","_","nodes"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Number of nodes to deploy for this specific cluster"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/cluster-create-determine-requirements.html"},"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/cluster-create-determine-requirements.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"region"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Region for the cluster"))}p.isMDXComponent=!0}}]);