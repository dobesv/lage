"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[239],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),N=l,k=d["".concat(p,".").concat(N)]||d[N]||m[N]||r;return t?n.createElement(k,o(o({ref:a},c),{},{components:t})):n.createElement(k,o({ref:a},c))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=N;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},4181:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=t(7462),l=(t(7294),t(3905));const r={sidebar_position:2,sidebar_label:"Quick Start",title:"Quick Start"},o=void 0,s={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Automated Installation",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/lage/docs/quick-start",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quick Start",title:"Quick Start"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/lage/docs/Introduction"},next:{title:"Introducing Lage",permalink:"/lage/docs/Tutorial/"}},p={},i=[{value:"Automated Installation",id:"automated-installation",level:2},{value:"Customize <code>lage.config.js</code>",id:"customize-lageconfigjs",level:2},{value:"Customize workspace (root level) <code>package.json</code>",id:"customize-workspace-root-level-packagejson",level:2},{value:"Ready to Build, Test, and Lint!",id:"ready-to-build-test-and-lint",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:i},d="wrapper";function m(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"automated-installation"},"Automated Installation"),(0,l.kt)("p",null,"To automatically install ",(0,l.kt)("inlineCode",{parentName:"p"},"lage")," as a ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependency")," at your workspace's root and create a default ",(0,l.kt)("inlineCode",{parentName:"p"},"lage.config.js"),", run:"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"undefined"}},"npx lage init"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"undefined"}},"npx lage init")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lage")," is compatible with all the popular workspace managers, including ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"rush"),"."),(0,l.kt)("h2",{id:"customize-lageconfigjs"},"Customize ",(0,l.kt)("inlineCode",{parentName:"h2"},"lage.config.js")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," command will also generate a default ",(0,l.kt)("inlineCode",{parentName:"p"},"lage.config.js"),". This will likely need to be modified. In particular, pay attention to the ",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline"),"\nconfiguration:"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:"/lage.config.js"},(0,l.kt)("div",{parentName:"pre",className:"code-title"},"/lage.config.js"),(0,l.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#267F99"}},"module"),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#267F99"}},"exports"),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}}," = {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#001080"}},"pipeline:"),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#001080"}},"build:"),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"^build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#001080"}},"test:"),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#001080"}},"lint:"),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}}," []")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"};"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"/lage.config.js"},(0,l.kt)("div",{parentName:"pre",className:"code-title"},"/lage.config.js"),(0,l.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"lint"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," []")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,l.kt)("h2",{id:"customize-workspace-root-level-packagejson"},"Customize workspace (root level) ",(0,l.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,l.kt)("inlineCode",{parentName:"p"},"lage")," to run your tasks:"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:"/package.json"},(0,l.kt)("div",{parentName:"pre",className:"code-title"},"/package.json"),(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"name"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"workspace-root"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"scripts"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"lage build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"test"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"lage test"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"lint"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"lage lint"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  },")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"devDependencies"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#0451A5"}},'"lage"'),(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#A31515"}},'"latest"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"}"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"/package.json"},(0,l.kt)("div",{parentName:"pre",className:"code-title"},"/package.json"),(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"name"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"workspace-root"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"scripts"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"test"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage test"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lint"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage lint"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"devDependencies"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lage"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.kt)("h2",{id:"ready-to-build-test-and-lint"},"Ready to Build, Test, and Lint!"),(0,l.kt)("p",null,"You are now ready to start running all the commands in your repository with ",(0,l.kt)("inlineCode",{parentName:"p"},"lage"),". You'll notice that tasks are now cached!"),(0,l.kt)("p",null,"For example (choose the appropriate command for your package manager):"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#008000"}},"# choose one")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"npm run build")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"yarn build")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#000000"}},"pnpm build"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# choose one")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run build")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn build")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"pnpm build")))))),(0,l.kt)("h2",{id:"next-steps"},"Next Steps"),(0,l.kt)("p",null,"Now that you've configured ",(0,l.kt)("inlineCode",{parentName:"p"},"lage"),", dig deeper in the ",(0,l.kt)("a",{parentName:"p",href:"/lage/docs/Tutorial/pipeline"},"Tutorial")," section for features like remote caching, task skipping, customized pipelines, and setting priorities."))}m.isMDXComponent=!0}}]);