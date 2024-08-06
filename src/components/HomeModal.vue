<script setup>
import * as CupertinoPane from 'cupertino-pane';
let cupertinoPane = CupertinoPane.CupertinoPane;
import { onMounted } from 'vue';

onMounted(() => {

let codeExample,  imageContainer, solutionsHeader, solutions, solutionsPosttext;

// Debounce function to limit the rate of the resize event handler
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function resizeAjusting() {
    if ( window.innerWidth >= 950) {
        // Desktop ++
        solutionsHeader.style.display = 'block';
        solutions.style.display = 'flex';
        solutionsPosttext.style.display = 'block';

        // Modal
        const drawer = new cupertinoPane('.drawer', {
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
        solutionsHeader.style.display = 'none';
        solutions.style.display = 'none';
        solutionsPosttext.style.display = 'none';
    }
}

setTimeout(() => {
    codeExample = document.querySelector('code.example');
    imageContainer = document.querySelector('.image-container');
    solutionsHeader = document.querySelector('#solutions');
    solutions = document.querySelector('.solutions');
    solutionsPosttext = document.querySelector('.and-thousands-more');

    resizeAjusting();
});

window.addEventListener('resize', debounce(resizeAjusting, 250));

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
      backdrop-filter: blur(20px);
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
        background: #ffffff;
        padding: 15px 40px;
        bottom: -20px;
        backdrop-filter: blur(20px);
        font-size: 13px;
        border-radius: 6px;

        .dark & {
            background: rgba(0, 0, 0, .4);
        }
    }

    code.example::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #ffffff;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
    }

    .dark code.example::before  {
        border-bottom: 10px solid rgba(0, 0, 0, .4) !important;
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