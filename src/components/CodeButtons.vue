<script setup>
    const props = defineProps({
        jsfiddle: String,
        repositoryUrl: {
            type: String,
            default: 'https://github.com/tech-systems/cupertino-docs'
        },
        folderPath: String,
        demoPath: String
    })
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
    <!-- Open in New Tab Button -->
    <a class="VPButton" 
       :href="props.demoPath ? props.demoPath : `/index-solutions/demo.html?id=${props.jsfiddle}`" 
       target="_blank" 
       rel="noreferrer">
        Open in New Tab
    </a>

    <!-- Code Sources Button -->
    <a class="VPButton" 
       :href="props.folderPath ? `${props.repositoryUrl}/tree/master/${props.folderPath}` : `https://jsfiddle.net/romantonoff/${props.jsfiddle}`" 
       target="_blank" 
       rel="noreferrer">
        Code sources
    </a>
</template>
