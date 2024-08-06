<script setup>
    const props = defineProps(['jsfiddle'])
</script>
<style>
    .VPButton {
        color: var(--vp-button-alt-text) !important; 
        background-color: var(--vp-button-alt-bg);
        border-radius: 20px;
        padding: 0 20px;
        line-height: 38px;
        font-size: 15px;
        display: inline-block;
        border: 1px solid var(--vp-button-alt-border);
        text-align: center;
        font-weight: 600;
        white-space: nowrap;
        transition: color .25s,border-color .25s,background-color .25s;
        text-decoration: inherit !important;
        touch-action: manipulation;
        margin-right: 10px;
    }
    .VPButton:hover,.VPButton:active, .VPButton:focus  {
        background-color: var(--vp-button-alt-hover-bg);
    }
</style>
<template>
    <a class="VPButton" :href="`http://localhost:5173/index-solutions/demo.html?id=${props.jsfiddle}`" target="_blank" rel="noreferrer">
        Open in New Tab
    </a>

    <a class="VPButton" :href="`https://jsfiddle.net/romantonoff/${props.jsfiddle}`" target="_blank" rel="noreferrer">
        Code sources
    </a>
</template>
