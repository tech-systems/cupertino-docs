---
layout: home

title: Cupertino Panes
titleTemplate: Create dynamic modals, cards, panes for your applications in few steps.

hero:
  name: Panes, Modals, Cards
  text: For your apps in few steps with ease.
  tagline: Any framework and free.
  actions:
    - theme: brand
      text: Demonstration
      link: /demonstration
    - theme: alt
      text: Quickstart
      link: /getting-started
    - theme: alt
      text: Docs
      link: /introduction
    - theme: alt
      text: GitHub
      link: https://github.com/tech-systems/panes
  image:
    src: /cupertino-pane-blank.webp
    alt: Cupertino Panes

features:
  - icon: 
        src: /features/1.svg
    title: Any framework
    details: Use with Svelte, Elixir, Vue, React, Angular or ant other front-end environment.
  - icon: 
        src: /features/2.png
    title: Small
    details: 12kb (minified and gzipped bundle with all modules). No dependencies.
  - icon: 
        src: /features/3.png
    title: AI Powered
    details: Engineered, refactored, and supervised, using latest AI Tools.
  - icon: 
        src: /features/4.png
    title: Modularized
    details: Add extra features to your panes and create own modules.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff); */
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #34b1fe 30%, #41d1ff); */
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #346bfe 30%, #41d1ff);

  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); */
  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #050414 50%, #47caff 50%); */
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #4656ff 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.solutions.items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    margin-top: 20px;
    margin-bottom: 20px;
    

    .item {
      width: calc(100% / 4);
      padding: 8px;
    }

    .item .VPLink {
      border: 1px solid var(--vp-c-bg-soft);
      border-radius: 12px;
      height: 380px;
      background-color: var(--vp-c-bg-soft);
      transition: border-color 0.25s, background-color 0.25s;
      display: flex;
      flex-direction: row;
      align-items: end;

      iframe {
        position: absolute;
        width: calc((100% / 4) - 14px);
        border: 0;
        top: 82px;
        border-radius: 10px 10px 0 0;
        height: 317px;
      }

      article {
        width: 100%;
      }

      h2 {
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        margin: 48px 0 16px;
        border-top: 1px solid var(--vp-c-divider);
        padding-top: 24px;
        letter-spacing: -0.02em;
        padding-left: 24px;
      }
    }
}


</style>


<script setup>
  import HomeModal from '../src/components/HomeModal.vue';
  import Sponsorships from '../src/components/Sponsorships.vue';


  setTimeout(() => {
    let solutionsHeader = document.querySelector('#solutions');
    let solutions = document.querySelector('.solutions');
    let solutionsPosttext = document.querySelector('#and-thousands-more');
    if ( window.innerWidth < 950) {
      solutionsHeader.style.display = 'none';
      solutions.style.display = 'none';
      solutionsPosttext.style.display = 'none';
    }
  });
</script>

## Solutions

<div class="solutions items">

  <!-- Item -->
  <div class="item grid-4">
    <div class="VPLink no-icon VPFeature solution-1-container">
      <iframe id="solution1" src="/index-solutions/solution-1.html"></iframe>
      <article class="box">
        <h2 class="title">Sheet</h2>
      </article>
    </div>
  </div>

  <!-- Item -->
  <div class="item grid-4">
    <div class="VPLink no-icon VPFeature solution-2-container">
      <iframe id="solution2" src="/index-solutions/solution-2.html"></iframe>
      <article class="box">
        <h2 class="title">Bulletin</h2>
      </article>
    </div>
  </div>

  <!-- Item -->
  <div class="item grid-4">
    <div class="VPLink no-icon VPFeature solution-3-container">
      <iframe id="solution3" src="/index-solutions/solution-3.html"></iframe>
      <article class="box">
        <h2 class="title">Inversed</h2>
      </article>
    </div>
  </div>

  <!-- Item -->
  <div class="item grid-4">
    <div class="VPLink no-icon VPFeature solution-4-container">
      <iframe id="solution4" src="/index-solutions/solution-4.html"></iframe>
      <article class="box">
        <h2 class="title">Modal</h2>
      </article>
    </div>
  </div>  
  
</div> 

One instance – Thousands solutions!



<Sponsorships />
<HomeModal />