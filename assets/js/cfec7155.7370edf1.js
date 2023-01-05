"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5248],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},5675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"intro-iasql",title:"Introduction to Infrastructure as SQL",date:new Date("2021-09-14T00:00:00.000Z"),authors:["depombo","dfellis","aguillenv"]},i=void 0,s={permalink:"/blog/intro-iasql",source:"@site/blog/2021/intro.mdx",title:"Introduction to Infrastructure as SQL",description:"What software you have deployed on what services and the interactions between them and the outside world is not a program, it is information about your infrastructure. Changing your infrastructure\xa0is\xa0a set of operations to perform, a program. A SQL database is a set of information and SQL queries read or change that data.",date:"2021-09-14T00:00:00.000Z",formattedDate:"September 14, 2021",tags:[],readingTime:3.595,hasTruncateMarker:!1,authors:[{name:"Luis Fernando De Pombo",imageURL:"https://github.com/depombo.png",key:"depombo"},{name:"David Ellis",imageURL:"https://github.com/dfellis.png",key:"dfellis"},{name:"Alejandro Guillen",imageURL:"https://github.com/aguillenv.png",key:"aguillenv"}],frontMatter:{slug:"intro-iasql",title:"Introduction to Infrastructure as SQL",date:"2021-09-14T00:00:00.000Z",authors:["depombo","dfellis","aguillenv"]},prevItem:{title:"UPDATE iasql SET source = 'open';",permalink:"/blog/os-iasql"}},u={authorsImageUrls:[void 0,void 0,void 0]},c=[{value:"<strong>Relations and Types Matter for Infrastructure</strong>",id:"relations-and-types-matter-for-infrastructure",level:2},{value:"<strong>New Powers: Explore, Query, and Automate Your Infrastructure</strong>",id:"new-powers-explore-query-and-automate-your-infrastructure",level:2},{value:"<strong>You Don&#39;t Need to Learn a New API (Probably)</strong>",id:"you-dont-need-to-learn-a-new-api-probably",level:2},{value:"<strong>You Can Test, Too</strong>",id:"you-can-test-too",level:2},{value:"<strong>Recover With Ease</strong>",id:"recover-with-ease",level:2}],l={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"What software you have deployed on what services and the interactions between them and the outside world is not a program, it is information about your infrastructure. Changing your infrastructure\xa0",(0,r.kt)("em",{parentName:"p"},"is"),"\xa0a set of operations to perform, a program. A SQL database is a set of information and SQL queries read or change that data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Infrastructure State is Data, Infrastructure Change is Code. It's as simple as that.")),(0,r.kt)("p",null,"And manipulating your infrastructure in this way is natural."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO aws_ec2 (ami_id, ec2_instance_type_id)\nSELECT ami.id, ait.id\nFROM ec2_instance_type as ait, (\n    SELECT id\n    FROM   amis\n    WHERE  image_name LIKE 'amzn-ami-hvm-%'ORDER BY creation_date DESC\n    LIMIT 1\n) as ami\nWHERE  ait.instance_name = 't2.micro';\n")),(0,r.kt)("h2",{id:"relations-and-types-matter-for-infrastructure"},(0,r.kt)("strong",{parentName:"h2"},"Relations and Types Matter for Infrastructure")),(0,r.kt)("p",null,"Infrastructure as Code solutions do not have a good way of encoding dependencies across infrastructure pieces in a micro services architecture which makes it really hard to make and revert changes to infrastructure."),(0,r.kt)("p",null,"Representing your infrastructure as SQL resolves the primary issue of YAML-based infrastructure tools by making the relations between pieces of your infrastructure first-class citizens, and enforcing type safety on the data and changes to it."),(0,r.kt)("p",null,"You can't set the EC2 instance type as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"t2.mucro"),"\xa0and have your deploy system try and fail to create such an instance. The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"\xa0statement will fail and tell you zero rows were inserted and you can quickly see why."),(0,r.kt)("p",null,"Similarly, if you have a record in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"security_group"),"\xa0table, you can't delete it if there are any references to it in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ec2_security_groups"),"\xa0join table. The relational structure of IaSQL prevents you from putting your infrastructure into an invalid state."),(0,r.kt)("h2",{id:"new-powers-explore-query-and-automate-your-infrastructure"},(0,r.kt)("strong",{parentName:"h2"},"New Powers: Explore, Query, and Automate Your Infrastructure")),(0,r.kt)("p",null,"Because your infrastructure is presented as a SQL database, you can connect to it with a SQL client of your choice and explore what you have and what the possibilities are."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW tables;\n")),(0,r.kt)("p",null,"You can query for unusual usage patterns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT aws_ec2.*\nFROM aws_ec2\nINNER JOIN ec2_instance_type AS ait ON ait.id = aws_ec2.ec2_instance_type_id\nWHERE ait.vcpus > 8\nORDER BY ait.vcpus DESC\n")),(0,r.kt)("p",null,"And since it is a database, you can create your own tables with their own meaning and associate them with your infrastructure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT aws_ec2.*\nFROM aws_ec2\nINNER JOIN company_team_ec2s AS cte ON cte.aws_ec2_id = aws_ec2.id\nINNER JOIN company_teams AS ct ON ct.id = cte.company_team_id\nWHERE ct.name = 'Data Engineering'\n")),(0,r.kt)("p",null,"Finally, your applications can know much more about what infrastructure they need than any auto-scaler solution out there. If you had a very infrequent but CPU/GPU-intensive job you need to handle at an unknown interval, you could give your application access to your IaSQL database and let it temporarily create and then destroy those resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const ec2_instance_id = await iasql(`\n  INSERT INTO aws_ec2 (ami_id, ec2_instance_type_id)\n  SELECT ami.id, ait.id\n  FROM ec2_instance_type as ait, (\n      SELECT id\n      FROM amis\n      WHERE image_name = 'application-job-runner'\n  ) as ami\n  WHERE ait.instance_name = 'g3.4xlarge'\n  RETURNING id;\n`);\nawait iasql(`\n  INSERT INTO ec2_security_groups (ec2_id, security_group_id)\n  SELECT ${ec2_instance_id}, sg.id\n  FROM security_groups AS sg\n  WHERE sg.name = 'application-job-group';\n`);\n// Only large-enough job runners will take it based on job metadata\nconst result = await job.run(myMassiveJob); \nawait iasql(`\n  DELETE FROM aws_ec2\n  WHERE id = ${ec2_instance_id};\n`);\n")),(0,r.kt)("h2",{id:"you-dont-need-to-learn-a-new-api-probably"},(0,r.kt)("strong",{parentName:"h2"},"You Don't Need to Learn a New API (Probably)")),(0,r.kt)("p",null,"Nearly all cloud backend systems depend on a database, and most likely a SQL database, so you do not need to learn a new language to manipulate the infrastructure in this way."),(0,r.kt)("p",null,"And likely you're using a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Schema_migration"},"migration system"),"\xa0in your backend to review changes to your database, which you can continue to use here, making it code to be reviewed, just like Infrastructure-as-Code."),(0,r.kt)("h2",{id:"you-can-test-too"},(0,r.kt)("strong",{parentName:"h2"},"You Can Test, Too")),(0,r.kt)("p",null,"Since the safety guarantees are provided by the types and relations between tables, you can simply copy your production infrastructure database into a local database and run your changes/migration against that and verify it works before you run it on your actual Infrastructure-as-SQL database."),(0,r.kt)("h2",{id:"recover-with-ease"},(0,r.kt)("strong",{parentName:"h2"},"Recover With Ease")),(0,r.kt)("p",null,"It's 3AM and your service has gone down. You reverted the most recent IaSQL migration, but that didn't resolve the issue, and you aren't sure which change across which service today caused the outage. So, you simply replace the state of the IaSQL database with a snapshot from yesterday to bring everything back online to a known-good-state, and then take your time after you're well-rested to figure out what actually went wrong."))}d.isMDXComponent=!0}}]);