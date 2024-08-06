<script setup>
    import * as CupertinoPane from 'cupertino-pane';
    let cupertinoPane = CupertinoPane.CupertinoPane;

    setTimeout(() => {
        const drawer = new cupertinoPane('.drawer');
        drawer.present({animate: true});
    });
</script>
<style>.drawer {padding: 0 20px;}</style>
<template>
    <div class="drawer">
        <h1>Header</h1>
        <p hide-on-bottom>Content</p> 
    </div>
</template>