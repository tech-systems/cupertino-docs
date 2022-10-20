# Settings
## Common configuration
| Property | Type | Default | Description |
| - | - | - | - |
| **horizontal** | `boolean` | false | Drag by horizontal axis will be possible on `true` and left right screen edge will automatically recognized as horizontal breakpoints |
| **horizontalOffset** | `number` | 'null' | Margin left and right for screen edges used with horizontal gestures |
| **inverse** | `boolean` | false | On `true` will change pane direction from `bottom-to-top` to `top-to-bottom` |
| **parentElement** | `string or HTMLElement` | Parent element | Pane will be appended to this element as child |
| **followerElement** | `string` | Follower element selector | Element with selector will following pane transitions |
| **cssClass** | `string` | null | Additional classes to apply for wrapper to stylize different panes |
| **fitHeight** | `boolean` | 'false' | Automatically calc and define content height as top breakpoint. Middle and bottom breakpoint will be disabled |
| **maxFitHeight** | `number` | 'null' | Define a maximum possible automatically calculated height with `fitHeight` property |
| **fitScreenHeight** | `boolean` | 'true' | On `true` will automatically adjust pane maximum height to screen height |
| **initialBreak** | `'top' \| 'middle' \| 'bottom'` | 'middle' | Initial pane position |
| **backdrop** | `boolean` | false | Dimmed overlay will rendered with pane if `true` |
| **backdropOpacity** | `number` | 0.4 | Dimmed overlay opacity value |
| **animationType** | `string` | 'ease' | Base transition timing function |
| **animationDuration** | `number` | 300 | Transition property duration |
| **bottomClose** | `boolean` | false | Close pane with drag to bottom breakpoint |
| **fastSwipeClose** | `boolean` | false | Close pane with fast drag to bottom direction |
| **fastSwipeSensivity** | `number` | 3 | Increase value and fast swipes become heavier |
| **freeMode** | `boolean` | false | On `true` will remove automatical magnetic effects to near breakpoint |
| **lowerThanBottom** | `boolean` | true | By default allow user to drag pane lower than bottom position. On `false` will automatically place pane to bottom position on lower than bottom attemption |
| **upperThanTop** | `boolean` | false | Allow user to drag pane upper than maximum top position. Useful with bulletin style without overflow-y |
| **touchAngle** | `number` | 45 | Allowable angle (in degrees) to trigger drag gestures |
| **buttonDestroy** | `boolean` | true | Determinate whetever close button will render or not |
| **bottomOffset** | `number` | 0 | Margin bottom for pane from screen bottom point |
| **topperOverflow** | `boolean` | true | Ability to scroll content inside pane if topper point reached |
| **topperOverflowOffset** | `number` | 0 | Offset from screen bottom to the end of overflow content |
| **showDraggable** | `boolean` | true | Render rectangular shape on the top of pane
| **draggableOver** | `boolean` | true | Render rectangular shape over a pane
| **clickBottomOpen** | `boolean` | true | If bottom position reached, simple click to pane will open pane to the next upper point |
| **dragBy** | `string[]` | null | Array of selectors for whom elements drag events will be attached. By default drag events attached to pane element. If you are about to drag only with draggable component set option to ['.pane .draggable'] |
| **preventClicks** | `boolean` | true | Prevent accidental unwanted clicks events during move gestures |
| **handleKeyboard** | `boolean` | true | Pane will be pushed up on open keyboard (only for cordova/capacitor/phonegap applications) |
| **touchMoveStopPropagation** | `boolean` | false | If enabled, then propagation of "touchmove" will be stopped |
| **simulateTouch** | `boolean` | true | Simulate touch events for Desktop |
| **passiveListeners** | `boolean` | true | (Indicates that the function specified by listener will never call preventDefault()) |
