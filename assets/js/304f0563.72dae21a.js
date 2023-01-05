"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,f=c["".concat(d,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(f,s(s({ref:t},l),{},{components:a})):n.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1,slug:"/database"},s="Database",i={unversionedId:"concepts/db",id:"version-0.0.22/concepts/db",title:"Database",description:"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database.",source:"@site/versioned_docs/version-0.0.22/concepts/db.md",sourceDirName:"concepts",slug:"/database",permalink:"/docs/database",draft:!1,tags:[],version:"0.0.22",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/database"},sidebar:"tutorialSidebar",previous:{title:"Deploy containerized app to ECS Fargate using IaSQL on Django (Python)",permalink:"/docs/django"},next:{title:"Module",permalink:"/docs/module"}},d={},u=[],l={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database"},"Database"),(0,o.kt)("p",null,"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database."),(0,o.kt)("p",null,"But it is administered a bit differently from a standard Postgres database. The IaSQL engine mediates between the database and your cloud infrastructure, so the database has been configured with a few affordances for that engine in mind."),(0,o.kt)("p",null,"The first piece you may note are a pair of tables: ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_module")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"iasql_dependencies"),". These tables represent the ",(0,o.kt)("a",{parentName:"p",href:"/docs/module"},"modules")," you have installed and what dependencies, if any, they require. You may have also noted that these tables are read-only for your account and you cannot manipulate their contents. You can think of them as a non-linear migration system and the IaSQL engine installs or uninstalls these modules based on your requests to it via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/function"},"IaSQL PostgreSQL functions"),". You can use a standard migration system in tandem with this system, for tracking the state of your infrastructure and allowing for easy rollback, but instead of managing the schema you're managing the data in the tables."),(0,o.kt)("p",null,"There's nothing stopping you from adding your own custom tables, such as adding your own metadata tables to associate with your infrastructure, but the IaSQL engine will ignore them at best, and get tripped up if a foreign key prevents a deletion it expects to be able to do."),(0,o.kt)("p",null,"Because the next thing that is a bit different from a normal Postgres database is the IaSQL engine can mutate your database state outside of your own connection to it. When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_apply()")," it takes the current state of your database and pushes it into your cloud infrastructure, but for both convenience and to resolve dependency issues in other modules, that ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," can still update columns in your database with new data. For instance, creating a new EC2 instance will cause it to then insert the AWS-controlled ",(0,o.kt)("inlineCode",{parentName:"p"},"instance_id")," into the database automatically for you. These changes to your database only happen when you run the IaSQL PosgreSQL functions to do something to it, but making mutations to the database on your side while it is doing its work could cause errors. Fortunately such a workflow is unlikely."),(0,o.kt)("p",null,"You can also provide the same AWS credentials to two hosted IaSQL databases, but that will cause issues outside of one being treated as read-write and the other as read-only: the two sources of truth for your infrastructure would clash and undo each others' work when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_apply()")," on them and that might not be immediately obvious. Having one database indirectly change the values for another database (on ",(0,o.kt)("a",{parentName:"p",href:"/docs/apply-and-sync"},(0,o.kt)("inlineCode",{parentName:"a"},"apply/sync")),") is different from your regular database usage."))}c.isMDXComponent=!0}}]);