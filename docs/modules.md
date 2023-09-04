
# Modules

> Available modules:   ZStackModule, FollowerModule, BackdropModule, FitHeightModule, InverseModule, HorizontalModule

Modular architecture of the project helps us to keep small size of bundles, also huge scalability features are possible. 

We are welcome to creators — feel free to make your own modules!

**Examples** of modules can be found [here](https://github.com/roman-rr/cupertino-pane/tree/master/src/modules)

## Install es bundle with all modules
By default you will import `esm` with all modules in bundle:
```js
import { CupertinoPane } from 'cupertino-pane';
```
Size of this bundle might be more than you need, if you don't use all features and modules. 
## Install es bundle with specific modules
Pick modules that you need to decrease bundle size:
```js
import { CupertinoPane } from 'cupertino-pane/dist/core';
import { BackdropModule, FitHeightModule } from 'cupertino-pane/dist/modules';

let myPane = new CupertinoPane('.cupertino-pane', {
  modules: [BackdropModule, FitHeightModule],
  fitHeight: true,
  backdrop: true
});
```
Be sure that you're import only `core` version here with `modules` you need. 
You can check installed modules:
```js
console.log(myPane.modules);
```
## Build your own umd bundles with specific modules
Clone repository and run commands:
```js
npm run build // will include all modules
npm run build -- --modules="" // will not include any modules
npm run build -- --modules="ZStackModule, BackdropModule" // Cherry-pick your modules 
```
As output you will have your `umd` and `esm` builds in `dist` folder.