export default {
    title: 'Cupertino Panes',
    description: 'Easily create most modern dynamic Panes for your progressive applications in few steps. Any framework.',
    head: [
        [
          'script',
          { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-B5HS3ML7F7' }
        ],
        [
          'script',
          {},
          "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-B5HS3ML7F7');"
        ],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:image', content: '/logo-dark.png'}]
    ],
    themeConfig: {
        logo: '/logo.svg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/roman-rr/cupertino-pane' }
        ],
        sidebar: [
          {
            text: 'Guide',
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
        ]
    }
}