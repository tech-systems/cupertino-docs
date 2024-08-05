<script setup>
import { CupertinoPane } from 'https://unpkg.com/cupertino-pane/dist/cupertino-pane.esm.min.js'
window.CupertinoPane = CupertinoPane;

setTimeout(() => {
    let codeExample = document.querySelector('code.example');
    let imageContainer = document.querySelector('.image-container');
    
    if ( window.innerWidth >= 950) {

            // Modal
            const drawer = new CupertinoPane('.drawer', {
                parentElement: '.image-container',
                modal: {
                    transition: 'zoom',
                    flying: true
                }
            });
            drawer.present({animate: true});
            drawer.on('onDidDismiss', (ev) => drawer.present({animate: true}));

            imageContainer.appendChild(codeExample);
            codeExample.style.display = 'block';
    } else {

    }
});
</script>
<style>

.VPImage.image-src {
    user-select: none;
}

.cupertino-pane-wrapper .pane {
      margin-top: -370px;
      border-radius: 10px !important;
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      width: 94%;
      max-width: 320px;
      box-shadow: 0 -30px 80px 0 rgb(0 0 0 / 30%);
      height: 180px !important;
      /* border: 1px solid rgb(106 106 106); */
      background: rgba(0,0,0,.8);
    }

    .drawer {
        height: inherit !important;
    }

    .modal-el {
        width: 100%;
        height: inherit;
        background-image: url(/logo-dark.png);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: 45px;
        background-position-x: center;
    }

    .destroy-button {
        background: transparent !important;
        top: 10px !important;
        right: 10px !important;
        fill: #58678e !important;
    }

    code.example {
        position: absolute;
        display: none;
        font-style: italic;
        background: rgba(0, 0, 0, .3);
        padding: 15px 40px;
        bottom: -20px;
        font-size: 13px;
        border-radius: 6px;
    }

    code.example::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(0, 0, 0, .3);;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
<template>
    <div class="drawer">
        <div class="modal-el"></div>
    </div>

    <code class="example">
        new CupertinoPane('pane', { <br> &nbsp;&nbsp;&nbsp;&nbsp;<strong>modal: true</strong><br> });<br>
    </code>
</template>