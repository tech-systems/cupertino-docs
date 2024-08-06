<style>
.sponsorships,
.contributors {
  text-align:center;


    .VPButton {
        color: var(--vp-button-alt-text) !important; 
        background-color: var(--vp-button-brand-bg);
        border-radius: 30px;
        padding: 0 30px;
        line-height: 55px;
        font-size: 16px;
        display: inline-block;
        border: 1px solid var(--vp-button-alt-border);
        text-align: center;
        font-weight: 600;
        white-space: nowrap;
        transition: color .25s,border-color .25s,background-color .25s;
        text-decoration: inherit !important;
        touch-action: manipulation;
        margin-right: 10px;

        &:hover, &:active, &:focus {
          background-color: var(--vp-c-brand-2);
        }
    }

    .VPButton.become-sponsor {
      background-color: var(--vp-button-alt-bg);
      border-radius: 5px;
      text-wrap: wrap;
      line-height: 26px;
      font-size: 13px;
      margin: 0;

      &:hover, &:active, &:focus {
        background-color: var(--vp-button-alt-hover-bg);
      }

       &.platinum {
        width: 160px;
        padding: 53px 0;
       }

      &.gold {
          width: 114px;
          padding: 30px 0;
       }

       &.silver {
          width: 84px;
          padding: 11px 0;
          line-height: 20px;
       }

       &.basic {
          width: 62px;
          padding: 13px 0;
          font-size: 11px;
          line-height: 17px;
          margin-top: 10px;
       }
    }

    .sponsors-container,
    .contributors-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      img {
        margin: auto;
      }
    }

    h2.higher {
      font-size: 30px;
    }

    h3 {
      font-size: 23px;
      margin-top: 50px;
      margin-bottom: 30px !important;
    }
}
</style>

<template>
  <div class="sponsorships">
    <h2 class="higher"> Our Sponsors </h2>
    <p class="pre-text">
      Support <strong>Panes</strong> on <a href="https://opencollective.com/cupertino-pane" target="_blank">Open Collective</a> and help us to make it even better! <br>
      Your support means a lot for us! <br>
    </p>
    <a class="VPButton" href="https://opencollective.com/cupertino-pane" target="_blank">
      Become a sponsor on OpenCollective
    </a>

    <h3>Platinum Sponsors</h3>
    <a class="VPButton become-sponsor platinum" href="https://opencollective.com/cupertino-pane" target="_blank">
      Become Platinum Sponsor
    </a>

    <h3>Gold Sponsors</h3>
    <a class="VPButton become-sponsor gold" href="https://opencollective.com/cupertino-pane" target="_blank">
      Become Gold Sponsor
    </a>

    <h3>Silver Sponsors</h3>
    <a class="VPButton become-sponsor silver" href="https://opencollective.com/cupertino-pane" target="_blank">
      Become Silver Sponsor
    </a>

    <h3>Sponsors</h3>

    <div class="sponsors-container">
      <a href="https://opencollective.com/cupertino-pane" target="_blank">
        <img src="https://opencollective.com/cupertino-pane/individuals.svg?avatarHeight=45&button=false">
        <img src="https://opencollective.com/cupertino-pane/organizations.svg?avatarHeight=45&button=false">
      </a>
      <a class="VPButton become-sponsor basic" href="https://opencollective.com/cupertino-pane" target="_blank">
        Become Sponsor
      </a>
    </div>


  </div>

  <div class="contributors">
    <h2>Code contributors</h2>
    <p class="pre-text">
    ⭐ ⭐ ⭐ ⭐ ⭐ <br>
    <strong>Star</strong> us on <a href="https://github.com/tech-systems/panes" target="_blank">Github</a><br> We appreciate your star, it helps us a lot!
    </p>
    <div class="contributors-container">
      <a href="https://opencollective.com/cupertino-pane" target="_blank"><img src="https://opencollective.com/cupertino-pane/contributors.svg?avatarHeight=45&button=false"></a>
    </div>
  </div>
</template>