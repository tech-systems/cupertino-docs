
# Events
The function that executes when the event fires. Events can be assigned in two ways: 
1. Using `events` parameter on initialization:
```js
let settings = {
  ...
  events: {
    onWillPresent: (ev) => {
      console.log('Will present callback', ev);
    }
  }
}
```
2. Using on method after initialization.
```js
const pane = new CupertinoPane('.cupertino-pane', { /* ... */ });
pane.on('onBackdropTap', (ev) => {
  console.log('Backdrop tapped', ev);
});
```
| Name | Type | Description |
| ---- | ---- | ----------- |
| **onDidDismiss** | `void: () => {}` | Call after pane will dissapeared |
| **onWillDismiss** | `void: () => {}` | Call before pane will dissapeared |
| **onDidPresent** | `void: () => {}` | Call after pane will present |
| **onWillPresent** | `void: () => {}` | Call before panel will present |
| **onDragStart** | `void: () => {}` | Call when detect user drag event on pane |
| **onDrag** | `void: () => {}` | Call executes on each new position of pane |
| **onDragEnd** | `void: () => {}` | Executes when drag event complete |
| **onBackdropTap** | `void: () => {}` | Call when user tap backdrop overlay |
| **onTransitionStart** | `void: () => {}` | Executes before auto transition and animation start |
| **onTransitionEnd** | `void: () => {}` | Executes when transition and animation complete |
