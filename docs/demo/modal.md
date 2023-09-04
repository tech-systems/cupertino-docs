<script setup>
    import CodeButtons from '../../src/components/CodeButtons.vue';
</script>

# Modal
Create your modal windows and popups with simple option `modal: true`
```js
let settings = {
    modal: true
};
```
Or check more [settings](/settings.html#modal) for modals.

<!-- Example -->
## Basic 
Default modal example with basic default `fade` built-in transition, and automatically calculated modal height.

<iframe style="margin-top:30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/zr7xm8Lp/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe style="margin-top:30px;margin-bottom: 30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/zr7xm8Lp/embedded/js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<CodeButtons jsfiddle="zr7xm8Lp"></CodeButtons>

<!-- Example -->
## Zoom Transition
Modal with default `zoom` built-in transition, and automatically calculated modal height.

<iframe style="margin-top:30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/nfk1eh59/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe style="margin-top:30px;margin-bottom: 30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/nfk1eh59/embedded/js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<CodeButtons jsfiddle="nfk1eh59"></CodeButtons>

<!-- Example -->
## Custom Transition
Modal with custom configured transition for `present()` and `destroy()` functions.

<iframe style="margin-top:30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/t2hdvp3f/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe style="margin-top:30px;margin-bottom: 30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/t2hdvp3f/embedded/js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<CodeButtons jsfiddle="t2hdvp3f"></CodeButtons>

<!-- Example -->
## Flying modal
Modal with dynamic `flying` effect animation to get user attention.

<iframe style="margin-top:30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/do3g01bh/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe style="margin-top:30px;margin-bottom: 30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/do3g01bh/embedded/js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<CodeButtons jsfiddle="do3g01bh"></CodeButtons>

<!-- Example -->
## Dismiss on Intense
Modal will be nicely dismissed on high-intense move events.
<br>Try to move pane out of the screen.

<iframe style="margin-top:30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/6ft3ce9o/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe style="margin-top:30px;margin-bottom: 30px;" width="100%" height="500" src="//jsfiddle.net/romantonoff/6ft3ce9o/embedded/js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<CodeButtons jsfiddle="6ft3ce9o"></CodeButtons>


### Need a help?
<small>*Need a help or more examples ? Please create an [issue](https://github.com/roman-rr/cupertino-pane/issues/new/choose)*</small>
