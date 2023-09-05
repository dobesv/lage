"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[170],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),N=r,k=p["".concat(s,".").concat(N)]||p[N]||m[N]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=N;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5,title:"5. Remote Cache"},i=void 0,l={unversionedId:"Tutorial/remote-cache",id:"Tutorial/remote-cache",title:"5. Remote Cache",description:"As your repo grows in size and complexity, the build takes longer and longer even locally. lage elegantly provides an incremental build capability given a locally available cache. When we pair the caching capability of lage with a cloud storage provider, we can speed up local builds with remote cache made available by Continuous Integration, or CI, jobs.",source:"@site/docs/Tutorial/remote-cache.md",sourceDirName:"Tutorial",slug:"/Tutorial/remote-cache",permalink:"/lage/docs/Tutorial/remote-cache",draft:!1,editUrl:"https://github.com/microsoft/lage/edit/master/docs/docs/Tutorial/remote-cache.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"5. Remote Cache"},sidebar:"defaultSidebar",previous:{title:"4. Local Caching",permalink:"/lage/docs/Tutorial/cache"},next:{title:"6. Profiling `lage`",permalink:"/lage/docs/Tutorial/profile"}},s={},c=[{value:"Setting up remote cache - Azure Blob Storage",id:"setting-up-remote-cache---azure-blob-storage",level:2},{value:"1. Upgrade to latest <code>lage</code>",id:"1-upgrade-to-latest-lage",level:3},{value:"2. Create <code>.env</code> and add to <code>.gitignore</code>",id:"2-create-env-and-add-to-gitignore",level:3},{value:"3. Generate auth tokens from Azure storage account",id:"3-generate-auth-tokens-from-azure-storage-account",level:3},{value:"4. Modify the <code>.env</code> file with the remote cache connection information",id:"4-modify-the-env-file-with-the-remote-cache-connection-information",level:3},{value:"5. Create a &quot;secret&quot; in the CI system for a Read/Write token",id:"5-create-a-secret-in-the-ci-system-for-a-readwrite-token",level:3},{value:"Uploading cache to a remote is <em>not</em> the default",id:"uploading-cache-to-a-remote-is-not-the-default",level:3},{value:"Accessing environment variables",id:"accessing-environment-variables",level:3}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As your repo grows in size and complexity, the build takes longer and longer even locally. ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," elegantly provides an incremental build capability given a locally available cache. When we pair the caching capability of ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," with a cloud storage provider, we can speed up local builds with remote cache made available by Continuous Integration, or CI, jobs."),(0,r.kt)("p",null,'The theory is that when the CI job runs, it\'ll produce a "last known good" cache to be uploaded in a cloud storage, like Azure Blob Storage. The remote cache has been made available both for build-over-build speed ups in future CI jobs, as well as the local first build scenario.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lage"),' has a "fallback cache" mechanism. ',(0,r.kt)("inlineCode",{parentName:"p"},"lage")," will look for cache in layers: first on disk, then on remote server. ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," will fill the local cache with the remote one if there is a remote cache hit. Next, ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," will save the locally built cache into the remote cache if the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"LAGE_WRITE_REMOTE_CACHE")," is set ",(0,r.kt)("em",{parentName:"p"},"and")," if the cache is not configured to use a local provider."),(0,r.kt)("h2",{id:"setting-up-remote-cache---azure-blob-storage"},"Setting up remote cache - Azure Blob Storage"),(0,r.kt)("p",null,"Follow these steps to set up a remote cache."),(0,r.kt)("h3",{id:"1-upgrade-to-latest-lage"},"1. Upgrade to latest ",(0,r.kt)("inlineCode",{parentName:"h3"},"lage")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/lage/docs/Cookbook/migration"},"migration guide")," for more details."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"yarn upgrade lage"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"yarn upgrade lage")))))),(0,r.kt)("h3",{id:"2-create-env-and-add-to-gitignore"},"2. Create ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," and add to ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,r.kt)("p",null,"Create the file:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"touch .env"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"touch .env")))))),(0,r.kt)("p",null,"Be sure to add it to your ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," to avoid checking in secrets!"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:".gitignore"},(0,r.kt)("div",{parentName:"pre",className:"code-title"},".gitignore"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"txt"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},".env")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"node_modules")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"lib")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"dist"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:".gitignore"},(0,r.kt)("div",{parentName:"pre",className:"code-title"},".gitignore"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"txt"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},".env")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"node_modules")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"lib")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"dist")))))),(0,r.kt)("h3",{id:"3-generate-auth-tokens-from-azure-storage-account"},"3. Generate auth tokens from Azure storage account"),(0,r.kt)("p",null,"Prerequisite is to have a working Storage Account with Blob Storage Container created. Note that container name, it'll be needed for Step 5."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the following for a ",(0,r.kt)("strong",{parentName:"li"},"read-only")," connection string:"),(0,r.kt)("li",{parentName:"ol"},"Set the start & expiry time to something appropriate"),(0,r.kt)("li",{parentName:"ol"},'Click "Generate SAS and connection string" button'),(0,r.kt)("li",{parentName:"ol"},'Save the "connection string" - this is your ',(0,r.kt)("strong",{parentName:"li"},"read-only")," connection string"),(0,r.kt)("li",{parentName:"ol"},'Click on "Access Keys" tab on the left'),(0,r.kt)("li",{parentName:"ol"},'Click "show keys"'),(0,r.kt)("li",{parentName:"ol"},'Save the "connection string" - this is your ',(0,r.kt)("strong",{parentName:"li"},"read-write")," connection string (alternatively, you can create a read-write SAS connection string)")),(0,r.kt)("h3",{id:"4-modify-the-env-file-with-the-remote-cache-connection-information"},"4. Modify the ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," file with the remote cache connection information"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:".env"},(0,r.kt)("div",{parentName:"pre",className:"code-title"},".env"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"txt"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"## This is required as of right now")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},'BACKFILL_CACHE_PROVIDER="azure-blob"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}})),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"## READ-ONLY SAS")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},'BACKFILL_CACHE_PROVIDER_OPTIONS={"connectionString":"the **read-only** connection string","container":"CONTAINER NAME"}'))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:".env"},(0,r.kt)("div",{parentName:"pre",className:"code-title"},".env"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"txt"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"## This is required as of right now")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},'BACKFILL_CACHE_PROVIDER="azure-blob"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}})),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"## READ-ONLY SAS")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},'BACKFILL_CACHE_PROVIDER_OPTIONS={"connectionString":"the **read-only** connection string","container":"CONTAINER NAME"}')))))),(0,r.kt)("h3",{id:"5-create-a-secret-in-the-ci-system-for-a-readwrite-token"},'5. Create a "secret" in the CI system for a Read/Write token'),(0,r.kt)("p",null,"Here's an example snippet of Github Action with the correct environment variable set:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"yaml"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},"- "),(0,r.kt)("span",{parentName:"div",style:{color:"#800000"}},"run"),(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,r.kt)("span",{parentName:"div",style:{color:"#0000FF"}},"yarn lage build test --verbose")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#800000"}},"env"),(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},":")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#800000"}},"BACKFILL_CACHE_PROVIDER"),(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,r.kt)("span",{parentName:"div",style:{color:"#0000FF"}},"azure-blob")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#800000"}},"BACKFILL_CACHE_PROVIDER_OPTIONS"),(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,r.kt)("span",{parentName:"div",style:{color:"#0000FF"}},"${{ secrets.BACKFILL_CACHE_PROVIDER_OPTIONS }}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#800000"}},"LAGE_WRITE_REMOTE_CACHE"),(0,r.kt)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,r.kt)("span",{parentName:"div",style:{color:"#0000FF"}},"true"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"yaml"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"run"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"yarn lage build test --verbose")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"env"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"BACKFILL_CACHE_PROVIDER"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"azure-blob")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"BACKFILL_CACHE_PROVIDER_OPTIONS"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"${{ secrets.BACKFILL_CACHE_PROVIDER_OPTIONS }}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"LAGE_WRITE_REMOTE_CACHE"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"true")))))),(0,r.kt)("p",null,'Create a secret named "BACKFILL_CACHE_PROVIDER_OPTIONS":'),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},'{"connectionString":"the **read-write** connection string","container":"CONTAINER NAME"}'))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},'{"connectionString":"the **read-write** connection string","container":"CONTAINER NAME"}')))))),(0,r.kt)("p",null,"::Note"),(0,r.kt)("h3",{id:"uploading-cache-to-a-remote-is-not-the-default"},"Uploading cache to a remote is ",(0,r.kt)("em",{parentName:"h3"},"not")," the default"),(0,r.kt)("p",null,"Without the ",(0,r.kt)("inlineCode",{parentName:"p"},"LAGE_WRITE_REMOTE_CACHE")," environment variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," no longer uploads build caches to the remote server."),(0,r.kt)("h3",{id:"accessing-environment-variables"},"Accessing environment variables"),(0,r.kt)("p",null,"Lage picks up your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file contents using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},(0,r.kt)("inlineCode",{parentName:"a"},"dotenv"))," utility under the hood (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/backfill/blob/03b0e808d978faebf7be922a3f87d764ad0efce2/packages/utils-dotenv/README.md"},"backfill-utils-dotenv implementation"),")."),(0,r.kt)("p",null,"Need to access environment variables from the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in your application? You would need to setup a mechanism to inject them. Try using utilities like ",(0,r.kt)("inlineCode",{parentName:"p"},"dotenv")," (for Node.js) or ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/env-cmd"},(0,r.kt)("inlineCode",{parentName:"a"},"env-cmd"))," (for executing commands)."),(0,r.kt)("p",null,"::"))}m.isMDXComponent=!0}}]);