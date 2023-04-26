"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"Introduction","href":"/lage/docs/Introduction","className":"green","docId":"Introduction"},{"type":"link","label":"Quick Start","href":"/lage/docs/quick-start","docId":"quick-start"},{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. Installation","href":"/lage/docs/Tutorial/installation","docId":"Tutorial/installation"},{"type":"link","label":"2. Pipeline","href":"/lage/docs/Tutorial/pipeline","docId":"Tutorial/pipeline"},{"type":"link","label":"3. Scoping by packages","href":"/lage/docs/Tutorial/scopes","docId":"Tutorial/scopes"},{"type":"link","label":"4. Local Caching","href":"/lage/docs/Tutorial/cache","docId":"Tutorial/cache"},{"type":"link","label":"5. Remote Cache","href":"/lage/docs/Tutorial/remote-cache","docId":"Tutorial/remote-cache"},{"type":"link","label":"6. Profiling `lage`","href":"/lage/docs/Tutorial/profile","docId":"Tutorial/profile"},{"type":"link","label":"7. Priorities","href":"/lage/docs/Tutorial/priority","docId":"Tutorial/priority"}],"href":"/lage/docs/Tutorial/"},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Command Line Options","href":"/lage/docs/Reference/cli","docId":"Reference/cli"},{"type":"link","label":"Configuration","href":"/lage/docs/Reference/config","docId":"Reference/config"}]},{"type":"category","label":"Contributing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Lage Packages","href":"/lage/docs/Contributing/packages","docId":"Contributing/packages"},{"type":"link","label":"Contributor License Agreement","href":"/lage/docs/Contributing/contribution-guide","docId":"Contributing/contribution-guide"}]},{"type":"category","label":"Cookbook","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Migration Guide","href":"/lage/docs/Cookbook/migration","docId":"Cookbook/migration"},{"type":"link","label":"Make Jest Fast","href":"/lage/docs/Cookbook/make-jest-fast","docId":"Cookbook/make-jest-fast"},{"type":"link","label":"Make ESLint Fast","href":"/lage/docs/Cookbook/make-lint-fast","docId":"Cookbook/make-lint-fast"},{"type":"link","label":"Make TypeScript Fast","href":"/lage/docs/Cookbook/make-ts-fast","docId":"Cookbook/make-ts-fast"}]},{"type":"link","label":"Quick Start","href":"/lage/docs/Quick Start","className":"hidden","docId":"Quick Start"}]},"docs":{"Contributing/contribution-guide":{"id":"Contributing/contribution-guide","title":"Contributor License Agreement","description":"This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.","sidebar":"defaultSidebar"},"Contributing/packages":{"id":"Contributing/packages","title":"Lage Packages","description":"lage itself is a monorepo. We dogfood our own task runner, of course! The packages and their responsibilities are listed below:","sidebar":"defaultSidebar"},"Cookbook/make-jest-fast":{"id":"Cookbook/make-jest-fast","title":"Make Jest Fast","description":"version 2","sidebar":"defaultSidebar"},"Cookbook/make-lint-fast":{"id":"Cookbook/make-lint-fast","title":"Make ESLint Fast","description":"version 2","sidebar":"defaultSidebar"},"Cookbook/make-ts-fast":{"id":"Cookbook/make-ts-fast","title":"Make TypeScript Fast","description":"version 2","sidebar":"defaultSidebar"},"Cookbook/migration":{"id":"Cookbook/migration","title":"Migration Guide","description":"v1.x -> v2.1","sidebar":"defaultSidebar"},"Introduction":{"id":"Introduction","title":"Introduction","description":"Your JavaScript repository has grown large enough that you have turned to using a monorepo to help you organize your code as multiple packages inside a repository. That\'s great! However, you realized quickly that the build scripts defined inside the workspace have to be run in package dependency order.","sidebar":"defaultSidebar"},"Quick Start":{"id":"Quick Start","title":"Quick Start","description":"","sidebar":"defaultSidebar"},"quick-start":{"id":"quick-start","title":"Quick Start","description":"Automated Installation","sidebar":"defaultSidebar"},"Reference/cli":{"id":"Reference/cli","title":"Command Line Options","description":"lage is meant to be run as a CLI. After installing lage inside the repository or globally, you can run the npm scripts from your repository like this:","sidebar":"defaultSidebar"},"Reference/config":{"id":"Reference/config","title":"Configuration","description":"Configuration is provided by Cosmiconfig, so lage configuration is very flexible! We recommend the use of a lage.config.js because it is both concise and flexible.","sidebar":"defaultSidebar"},"Tutorial/cache":{"id":"Tutorial/cache","title":"4. Local Caching","description":"lage by default will cache recent task results locally on disk. As long as the source file and the command arguments have not changed, those cached results will be restored.","sidebar":"defaultSidebar"},"Tutorial/installation":{"id":"Tutorial/installation","title":"1. Installation","description":"Getting started with lage is easy.","sidebar":"defaultSidebar"},"Tutorial/pipeline":{"id":"Tutorial/pipeline","title":"2. Pipeline","description":"In this step, you\'ll learn about how to influence how lage schedules which \\"target\\" runs at which time. For full details on how to configure pipelines, make sure to consult with the reference for configuration.","sidebar":"defaultSidebar"},"Tutorial/priority":{"id":"Tutorial/priority","title":"7. Priorities","description":"In a large monorepo, you\'ll need to do some profiling to understand bottlenecks. Sometimes, the package tasks are not scheduled in the order that will produce the most optimized run times.","sidebar":"defaultSidebar"},"Tutorial/profile":{"id":"Tutorial/profile","title":"6. Profiling `lage`","description":"A particularly complex monorepo can present opportunities for optimization. For example, when there are really large packages, it might be more efficient to break those up so the build can be split across different CPU cores. lage greatly enhances the ability for developers to see where the bottlenecks are.","sidebar":"defaultSidebar"},"Tutorial/README":{"id":"Tutorial/README","title":"Introducing Lage","description":"Overview","sidebar":"defaultSidebar"},"Tutorial/remote-cache":{"id":"Tutorial/remote-cache","title":"5. Remote Cache","description":"As your repo grows in size and complexity, the build takes longer and longer even locally. lage elegantly provides an incremental build capability given a locally available cache. When we pair the caching capability of lage with a cloud storage provider, we can speed up local builds with remote cache made available by Continuous Integration, or CI, jobs.","sidebar":"defaultSidebar"},"Tutorial/scopes":{"id":"Tutorial/scopes","title":"3. Scoping by packages","description":"By examining the target graph, lage can understand which targets are not affected by a particular change being proposed in a pull request. In that case lage has a few CLI arguments controlling which target to run.","sidebar":"defaultSidebar"}}}')}}]);