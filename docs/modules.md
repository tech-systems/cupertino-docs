
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


## Z-Stack
Configuration for 3D push effects and z-stack
```js
let settings = {
  ...
  zStack: {
    pushElements: ['.card-1', '.main-content'],
    pushYOffset: 10
  }
}
```
| Property | Type | Default | Description |
| - | - | - | - |
| **pushElements** | `string[]` | null | DOM Element will be pushed and scaled |
| **minPushHeight** | `number` | null | Height from which 3d push effect will be started |
| **cardYOffset** | `number` | null | Margin value to place pushed elements upper |
| **cardZScale** | `number` | 0.93 | Scale value for each pushed element |
| **cardContrast** | `number` | 0.85 | Contrast value for each pushed element |
| **stackZAngle** | `number` | 160 | Value from 0 to 3000 that define angle of z-stack in common. 0 - 150 positive expontial angle. 150 - 170 = 45 degree angle. 200 - 3000 negative exponential angle |
