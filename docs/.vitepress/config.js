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
            { icon: 'github', link: 'https://github.com/roman-rr/cupertino-pane' }
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
      // text: 'Guide',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Demonstration', link: '/demonstration' },
        { text: 'Getting Started', link: '/getting-started' },
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
