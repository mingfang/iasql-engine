"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2,slug:"/connect"},s="Connecting to PostgreSQL",i={unversionedId:"how-to/connect",id:"version-0.0.22/how-to/connect",title:"Connecting to PostgreSQL",description:"The IaSQL dashboard provides an IDE-like SQL editor built specifically for the IaSQL needs that can be used to run queries on the hosted database(s) connected to your cloud account(s).",source:"@site/versioned_docs/version-0.0.22/how-to/connect.md",sourceDirName:"how-to",slug:"/connect",permalink:"/docs/connect",draft:!1,tags:[],version:"0.0.22",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/connect"},sidebar:"tutorialSidebar",previous:{title:"Manage an AWS Account",permalink:"/docs/aws"},next:{title:"Deploy containerized app to AWS ECS Fargate using IaSQL",permalink:"/docs/fargate"}},c={},l=[{value:"PostgreSQL Clients",id:"postgresql-clients",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-to-postgresql"},"Connecting to PostgreSQL"),(0,r.kt)("p",null,"The IaSQL ",(0,r.kt)("a",{parentName:"p",href:"https://app.iasql.com"},"dashboard")," provides an IDE-like SQL editor built specifically for the IaSQL needs that can be used to run queries on the hosted database(s) connected to your cloud account(s)."),(0,r.kt)("img",{src:n(5834).Z}),(0,r.kt)("p",null,"It is also possible to connect to a hosted IaSQL PostgreSQL database outside of the dashboard. The required information to connect to a PostgreSQL IaSQL database will be provided when you connect an AWS account when provisioning the database. IaSQL does not store your database password so it will only be displayed when the database is provisioned. If you lose the password, you can recreate the database by disconnecting and connecting your account again using the same region and AWS credentials."),(0,r.kt)("img",{width:440,src:n(42).Z}),(0,r.kt)("h2",{id:"postgresql-clients"},"PostgreSQL Clients"),(0,r.kt)("p",null,"PostgreSQL has a built-in command line client, ",(0,r.kt)("inlineCode",{parentName:"p"},"psql"),", which you can use to connect to your database and run queries. To install ",(0,r.kt)("inlineCode",{parentName:"p"},"psql")," in your command line follow the instructions for your corresponding OS ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),"."),(0,r.kt)("p",null,"One of the reasons we built IaSQL on an unmodified PG is because of the vast ecosystem we get to stand on. This ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.postgresql.org/wiki/PostgreSQL_Clients"},"PostgreSQL Client wiki")," contains an extensive list of all the different clients you can use to connect to a PG database provisioned with IaSQL. The IaSQL team personally uses and recommends ",(0,r.kt)("a",{parentName:"p",href:"https://arctype.com"},"Arctype")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.beekeeperstudio.io"},"Beekeeper Studio"),"."))}d.isMDXComponent=!0},42:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/credentials-c7276030daeda6ddbe3e6c8d01118a72.png"},5834:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-028aa7f436bf72417627baac34b4bfcd.png"}}]);