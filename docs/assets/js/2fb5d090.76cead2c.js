"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),N=n,k=d["".concat(p,".").concat(N)]||d[N]||m[N]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=N;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:7,title:"7. Priorities"},l=void 0,s={unversionedId:"Tutorial/priority",id:"Tutorial/priority",title:"7. Priorities",description:"In a large monorepo, you'll need to do some profiling to understand bottlenecks. Sometimes, the package tasks are not scheduled in the order that will produce the most optimized run times.",source:"@site/docs/Tutorial/priority.md",sourceDirName:"Tutorial",slug:"/Tutorial/priority",permalink:"/lage/docs/Tutorial/priority",draft:!1,editUrl:"https://github.com/microsoft/lage/edit/master/docs/docs/Tutorial/priority.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"7. Priorities"},sidebar:"defaultSidebar",previous:{title:"6. Profiling `lage`",permalink:"/lage/docs/Tutorial/profile"},next:{title:"Command Line Options",permalink:"/lage/docs/Reference/cli"}},p={},i=[{value:"v2 styled configuration for priority",id:"v2-styled-configuration-for-priority",level:2},{value:"Legacy (v1 + v2) way of configuring priority",id:"legacy-v1--v2-way-of-configuring-priority",level:2}],c={toc:i},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In a large monorepo, you'll need to do some ",(0,n.kt)("a",{parentName:"p",href:"/lage/docs/Tutorial/profile"},"profiling")," to understand bottlenecks. Sometimes, the package tasks are not scheduled in the order that will produce the most optimized run times."),(0,n.kt)("h2",{id:"v2-styled-configuration-for-priority"},"v2 styled configuration for priority"),(0,n.kt)("p",null,"As of ",(0,n.kt)("inlineCode",{parentName:"p"},"lage")," v2, you can now configure the priority inside the target pipeline configuration:"),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#267F99"}},"module"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#267F99"}},"exports"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," = {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"pipeline:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"build:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"^build"'),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"test:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"build"'),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"foo#test"'),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"priority:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#098658"}},"100"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"dependsOn:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"build"'),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"]")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"    }")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"};"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"build"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"foo#test"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"priority"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"100"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"dependsOn"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,n.kt)("h2",{id:"legacy-v1--v2-way-of-configuring-priority"},"Legacy (v1 + v2) way of configuring priority"),(0,n.kt)("p",null,"To manually pick a package task to be higher priority, simply place a ",(0,n.kt)("a",{parentName:"p",href:"/lage/docs/Reference/config"},(0,n.kt)("inlineCode",{parentName:"a"},"priorities")," configuration")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"lage.config.js"),":"),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#267F99"}},"module"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#267F99"}},"exports"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," = {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"pipeline:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," { ... },")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"priorities:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," [")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"    {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"package:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A31515"}},"'foo'"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"task:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#A31515"}},"'test'"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#001080"}},"priority:"),(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#098658"}},"100")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"    }")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"  ]")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#000000"}},"}"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"..."),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"priorities"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," [")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"package"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"foo"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"task"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"test"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"priority"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"100")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  ]")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,n.kt)("p",null,"The higher the priority number, the higher the priority. These numbers are relative to each other. Any task that is not listed in the priorities array is not prioritized."))}m.isMDXComponent=!0}}]);