export default {
    title: 'Cupertino Panes',
    description: 'Javascript library for dynamic modals, cards, panes. Create modal or css card for your javascript vue or angular pwa applications in few steps. Any framework.',
    head: [
        [
          'script',
          { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-B5HS3ML7F7' }
        ],
        [
          'script',
          {},
          "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-B5HS3ML7F7');\ngtag('config', 'AW-10972100318');"
        ],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:image', content: '/logo-og.jpg'}],
        ['meta', { name: 'keywords', content: 'javascript vue, javascript angular, modal popup, create modal, create modal in react, pwa react, progressive app, pwa, modals, card css, animate css, css transition, mobile best, phone slide, using vue, vue component, translate ionic, ionic framework, code pen'}]
    ],
    themeConfig: {
        logo: '/logo.svg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/tech-systems/panes' }
        ],
        nav: [
          { text: 'Docs', link: '/' },
          { text: 'Blog', link: '/blog/', activeMatch: '/blog' }
        ],
        sidebar: {
          '/blog/': blogSidebar(),
          '/': docsSidebar()
        },
    }
}

function docsSidebar() {
  return [
    {
      text: 'Documentation',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Getting Started', link: '/getting-started' },
        { 
          text: 'Demonstration', link: 'demonstration',
          items: [
            { text: 'Modal', link: '/demo/modal' },
            { text: 'Base', link: '/demo/base' },
            { text: 'Overflow Top', link: '/demo/overflow-top' },
            { text: 'Auto Height', link: '/demo/auto-height' },
            { text: 'Top-to-Bottom', link: '/demo/top-to-bottom' },
            { text: 'Synthwave', link: '/demo/synthwave' },
            { text: 'Picture-in-Picture', link: '/demo/picture-in-picture' },
            { text: 'Rich notifications', link: '/demo/rich-notifications' },
            { text: 'Z-stack full', link: '/demo/z-stack-full' },
            { text: 'Z-Stack simple', link: '/demo/z-stack-simple' },
            { text: '3D Push', link: '/demo/3d-push' },
            { text: 'Backdrop drag-opacity', link: '/demo/backdrop-drag-opacity' },
            { text: 'Overflow Top-Middle', link: '/demo/overflow-top-middle' },
            { text: 'Draggable Over', link: '/demo/draggable-over' },
            { text: 'Prevent Dismiss', link: '/demo/prevent-dismiss' },
            { text: 'Follower', link: '/demo/follower' },
            { text: 'Apple Clips', link: '/demo/apple-clips' },
            { text: 'Starbucks', link: '/demo/starbucks' },
          ]
        },
        { text: 'Modules', link: '/modules' },
        { text: 'Settings', link: '/settings' },
        { text: 'Events', link: '/events' },
        { text: 'Breakpoints', link: '/breakpoints' },
        { text: 'Public Methods', link: '/public-methods' },
        { text: 'Attributes', link: '/attributes' },
        { text: 'CSS Variables', link: '/css-variables' },
        { text: 'Keyboard issues', link: '/keyboard-issues' }
      ]
    }
  ];
}

function blogSidebar() {
  return [{
    // text: 'Latest posts',
    items: [{text: 'Latest posts', link: '/blog/'}]
  }];
}
