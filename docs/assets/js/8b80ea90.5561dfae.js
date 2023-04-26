"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[14,918],{8503:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6432);r.o.initialize({startOnLoad:!0});const i=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{r.o.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},5591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>_,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(941),o=a(4996),l=a(8503);const s={sidebar_position:1,sidebar_label:"Introduction",sidebar_class_name:"green",slug:"Introduction"},p=void 0,d={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"Your JavaScript repository has grown large enough that you have turned to using a monorepo to help you organize your code as multiple packages inside a repository. That's great! However, you realized quickly that the build scripts defined inside the workspace have to be run in package dependency order.",source:"@site/docs/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/lage/docs/Introduction",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/Introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",sidebar_class_name:"green",slug:"Introduction"},sidebar:"defaultSidebar",next:{title:"Quick Start",permalink:"/lage/docs/quick-start"}},c={},u=[{value:"How does <code>lage</code> schedule tasks?",id:"how-does-lage-schedule-tasks",level:2},{value:"How does <code>lage</code> make builds faster?",id:"how-does-lage-make-builds-faster",level:2},{value:"Level 1: Legacy Workspace Runners",id:"level-1-legacy-workspace-runners",level:3},{value:"Level 2: Scoping",id:"level-2-scoping",level:3},{value:"Level 3. Caching",id:"level-3-caching",level:3},{value:"Level 4. Pipelining",id:"level-4-pipelining",level:3}],b={toc:u},h="wrapper";function _(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your JavaScript repository has grown large enough that you have turned to using a ",(0,r.kt)("a",{parentName:"p",href:"https://monorepo.tools"},"monorepo")," to help you organize your code as multiple packages inside a repository. That's great! However, you realized quickly that the build scripts defined inside the workspace have to be run in package dependency order."),(0,r.kt)("p",null,"There exist many tools in the market that provide ways for you to run these npm scripts in the correct topological order. So why choose ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," for your repository?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," is battle tested - it is in use by many JavaScript repositories number in the millions lines of code each"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," can be easily adopted - all it takes is just one npm package install with a single configuration file for the entire repository"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," supports remote cache as a fallback - never build the same code twice"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," is optimized for modern multi-core development machines - don't waste your CPU resources waiting on a single core when you have so many to spare!")),(0,r.kt)("h2",{id:"how-does-lage-schedule-tasks"},"How does ",(0,r.kt)("inlineCode",{parentName:"h2"},"lage")," schedule tasks?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lage"),' has a secret weapon: it has a "pipeline" configuration syntax to define the implicit relationship between tasks. Combined with a package graph, ',(0,r.kt)("inlineCode",{parentName:"p"},"lage")," knows how to schedule which task to run first and which one can be run in parallel. Let's look at an example:"),(0,r.kt)(i.Z,{alt:"Package graph with task graph equals target graph",sources:{light:(0,o.Z)("/img/graph-diagram-light.png"),dark:(0,o.Z)("/img/graph-diagram-dark.png")},style:{width:"100%"},mdxType:"ThemedImage"}),(0,r.kt)("h2",{id:"how-does-lage-make-builds-faster"},"How does ",(0,r.kt)("inlineCode",{parentName:"h2"},"lage")," make builds faster?"),(0,r.kt)("p",null,"So how does ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," make builds faster? To fully appreciate how ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," gives you the best build performance compared to other monorepo task runners, take a look at this example. Here we have a repo with this dependency graph:"),(0,r.kt)(l.Z,{chart:"\ngraph TD\n  FooCore --\x3e BuildTool\n  BarCore --\x3e BuildTool\n  FooApp1 --\x3e FooCore\n  FooApp2 --\x3e FooCore\n  BarPage --\x3e BarCore\n",mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"level-1-legacy-workspace-runners"},"Level 1: Legacy Workspace Runners"),(0,r.kt)("p",null,"First, let's take a look at the typical workspace runners. ",(0,r.kt)("inlineCode",{parentName:"p"},"Lerna")," (before), ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm recursive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rush")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wsrun"),' all will run one task at a time. This creates a sort of "build phase" effect where ',(0,r.kt)("inlineCode",{parentName:"p"},"test")," scripts are not allowed to run until ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,r.kt)(l.Z,{chart:"gantt\n  title Level 1: Typical Lerna or Workspace Runners\n  dateFormat  s\n  axisFormat  %S\n  section Total\n    prepare: active, total_prepare, 0, 30s\n    build : active, total_build, after total_prepare, 50s\n    test : active, total_test, after total_build, 25s\n  section BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after total_prepare, 10s\n    test   : bt_test, after total_build, 6s\n  section FooCore\n    prepare: fc_prepare, after bt_prepare, 10s\n    build: fc_build, after bt_build, 15s\n    test: fc_test, after total_build, 25s\n  section FooApp1\n    prepare: fa1_prepare, after fc_prepare, 10s\n    build: fa1_build, after fc_build, 25s\n    test: fa1_test, after total_build, 15s\n  section FooApp2\n    prepare: fa2_prepare, after fc_prepare, 10s\n    build: fa2_build, after fc_build, 12s\n    test: fa2_test, after total_build, 8s\n  section BarCore\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: bc_build, after bt_build, 10s\n    test: bc_test, after total_build, 16s\n  section BarPage\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bc_build, 25s\n    test: bp_test, after total_build, 12s\n",mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"level-2-scoping"},"Level 2: Scoping"),(0,r.kt)("p",null,'One of the first way to speeding up build jobs is to use "scoping." Usually a change only affects a subset of the graph. We can get rid of the builds of ',(0,r.kt)("inlineCode",{parentName:"p"},"FooCore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FooApp1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FooApp2")," if the only changes are inside ",(0,r.kt)("inlineCode",{parentName:"p"},"BarCore"),". However, we'll note that ",(0,r.kt)("inlineCode",{parentName:"p"},"BarPage")," is still affected, resulting in this."),(0,r.kt)(l.Z,{chart:"gantt\n  title Level 2: Scoping\n  dateFormat  s\n  axisFormat  %S\n  section Total\n    Level 1: 0, 105s\n    prepare: active, total_prepare, 0, 30s\n    build  : active, total_build, after total_prepare, 45s\n    test  : active, total_test, after total_build, 16s\n\tsection BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after total_prepare, 10s\n    test   : bt_test, after total_build, 6s\n\tsection FooCore\n\t  skipped: 0\n  section FooApp1\n\t  skipped: 0\n  section FooApp2\n\t  skipped: 0\n  section BarCore *\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: bc_build, after bt_build, 10s\n    test: bc_test, after total_build, 16s\n  section BarPage\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bc_build, 25s\n    test: bp_test, after total_build, 12s\n",mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"level-3-caching"},"Level 3. Caching"),(0,r.kt)("p",null,"To further improve build times, we can take advantage of build caches. If we had previously built certain packages, we should be able to speed up the build with a cache. Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"BarCore")," packages have already been built and tested, and so"),(0,r.kt)(l.Z,{chart:"gantt\n  title Level 3: Caching\n  dateFormat  s\n  axisFormat  %S\n  section Total\n    Level 1: 0, 105s\n    Level 2: 0, 91s\n    prepare: active, total_prepare, 0, 30s\n    build  : active, total_build, after total_prepare, 37s\n    test  : active, total_test, after total_build, 12s\n\tsection BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after total_prepare, 10s\n    test   : bt_test, after total_build, 6s\n\tsection FooCore\n\t  skipped: 0\n  section FooApp1\n\t  skipped: 0\n  section FooApp2\n\t  skipped: 0\n  section BarCore\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: crit, bc_build, after bt_build, 2s\n    test: crit, bc_test, after total_build, 2s\n  section BarPage *\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bc_build, 25s\n    test: bp_test, after total_build, 12s\n",mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"level-4-pipelining"},"Level 4. Pipelining"),(0,r.kt)("p",null,"Finally, the last thing we can to speed things up is to break down the wall between build phases from the task runner. In ",(0,r.kt)("inlineCode",{parentName:"p"},"lage"),", we define the relationship between scripts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," configuration."),(0,r.kt)(l.Z,{chart:"gantt\n  title Level 4: Pipelining\n  dateFormat  s\n  axisFormat  %S\n  section Total\n    Level 1: 0, 105s\n    Level 2: 0, 91s\n    Level 3: 0, 79s\n    prepare: active, total_prepare, 0, 30s\n    build  : active, total_build, 10, 45s\n    test  : active, total_test, 20, 47s\n\tsection BuildTool\n    prepare: bt_prepare, 0, 10s\n    build  : bt_build, after bt_prepare, 10s\n    test   : bt_test, after bt_build, 6s\n\tsection FooCore\n\t  skipped: 0\n  section FooApp1\n\t  skipped: 0\n  section FooApp2\n\t  skipped: 0\n  section BarCore\n    prepare: bc_prepare, after bt_prepare, 10s\n    build: bc_build, after bt_build, 2s\n    test: bc_test, after bc_build, 2s\n  section BarPage *\n    prepare: bp_prepare, after bc_prepare, 10s\n    build: bp_build, after bp_prepare, 25s\n    test: bp_test, after bp_build, 12s\n",mdxType:"Mermaid"}))}_.isMDXComponent=!0}}]);