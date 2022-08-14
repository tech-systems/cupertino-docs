
# Breakpoints

Package now supports 3 base breakpoints
```javascript
const pane = new CupertinoPane('.cupertino-pane', { 
  breaks: {
    top: { // Topper point that pane can reach
      enabled: true, // Enable or disable breakpoint
      height: 700, // Pane breakpoint height
      bounce: true // Bounce pane on transition
    },
    middle: { ... },
    bottom: { ... }
  }
});
```
Bottom and middle heights normalized accross devices by default 

Default top height: `window.screen.height - (135 * 0.35)`

Add property `bounce` to break and enjoy transitions in apple stocks style with `cubic-bezier(0.175, 0.885, 0.370, 1.120)`
