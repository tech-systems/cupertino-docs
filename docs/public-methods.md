# Public Methods

## present
### present({animate: **boolean = false**, transition: **{}**}): Promise
Will render pane DOM and show pane with setted params. 
```javascript
myPane.present();
```
Possible to pass custom transitions:
```javascript
myPane.present({
  animate: true,
  transition: {
    duration: 600,
    from: {
      opacity: 0.7,
      transform: `translateY(280px) perspective(250px) rotateX(65deg) scale(0.3)`
    },
    to: {
      opacity: 1
    }
  }
});
```

## destroy
### destroy({animate: **boolean = false**, transition: **{}**}}}): Promise
Remove pane from DOM and clear styles
```javascript
myPane.destroy({animate: true});
```
Possible to pass custom transitions (look above present method for example)

## on
### on({events: **string**, handler: **Function**}): Promise
Will assign a function to be executed when the event will be fired.
```javascript
myPane.on('onDidPresent', () => console.log('Presented!'));
```

## moveToBreak
### moveToBreak('top' | 'middle' | 'bottom')
Will change pane position with animation to selected breakpoint.
```javascript
myPane.moveToBreak('top');
```

## moveToHeight
### moveToHeight(val: **number**)
Will move pane to exact height with animation. Breakpoints will saved. 
```javascript
myPane.moveToHeight(575);
```

## hide
### hide()
Dissappear pane from screen, still keep pane in DOM.
```javascript
myPane.hide();
```

## isHidden
### isHidden()
Determinate if pane position was moved out of screen, but pane still exist in DOM.
true - in DOM but not visible, false - in DOM and visible, null - not rendered
```javascript
if (myPane.isHidden()) {
    myPane.moveToBreak('top');
}
```

## currentBreak
### currentBreak()
Method return current break position in text format ('top' | 'middle' | 'bottom)
```javascript
if (myPane.currentBreak() === 'top') {
    myPane.moveToBreak('bottom');
}
```

## disableDrag
### disableDrag()
Method disable any drag actions for pane
```javascript
myPane.disableDrag();
```

## enableDrag
### enableDrag()
Method enable any drag actions for pane
```javascript
myPane.enableDrag();
```

## backdrop
### backdrop({show: **boolean = true**})
Show/Hide backdrop method 
```javascript
myPane.backdrop({show: true}); // show
myPane.backdrop({show: false}); // hide
```

## setBreakpoints
### setBreakpoints(breakpoints: **PaneBreaks**, bottomOffset?: number)
Method updates breakpoints configuration and bottomOffset for rendered Pane
```javascript
myPane.setBreakpoints({
  top: {
      enabled: true,
      height: 700,
      bounce: true
  },
  middle: { ... },
  bottom: { ... }
});

myPane.setBreakpoints({
  top: { ... },
  middle: { ... },
  bottom: { ... }
}, 100 );
```

## preventDismiss
### preventDismiss(**boolean = false**)
Use this method to prevent dismiss events. Use `onWillDismiss()` callback to listen if dismiss event prevented. 
```javascript
const settings = {
  ...
  events: {
    onWillDismiss: (e) => {
      if (e) {
        console.log(e.prevented);
      }
    }
  }
}

const myPane = new CupertinoPane('.cupertino-pane', settings);
myPane.present({animate: true});
myPane.preventDismiss(true);
```

## calcFitHeight
### calcFitHeight()
Force re-calculate height for `fitHeight: true` in cases when height was calculated not properly.
```javascript
myPane.calcFitHeight();
```
