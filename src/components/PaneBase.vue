<script setup>
    import { CupertinoPane } from 'https://unpkg.com/cupertino-pane/dist/cupertino-pane.esm.min.js'
    setTimeout(() => {
        const drawer = new CupertinoPane('.drawer');
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