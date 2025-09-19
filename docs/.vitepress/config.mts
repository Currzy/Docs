import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "💸 Currzy",
  description: "Currzy Description",

  lang: "en-US",

  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Currzy/Currzy-js' }
        ]
      }
    },

    ru: {
      label: "Русский",
      lang: "ru-RU",
      link: "/ru/",
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Документация', link: '/ru/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Примеры',
            items: [
              { text: 'Markdown примеры', link: '/ru/markdown-examples' },
              { text: 'Примеры API', link: '/ru/api-examples' }
            ]
          }
        ],

        footer: {
          message: '💸 Сделано с ❤️ от команды <a href="https://anidzen.com" target="_blank">Anidzen</a> и <a href="https://vahe.anidzen.com/ru" target="_blank">Vahe Sargsyan</a> · <a href="https://github.com/Currzy">GitHub</a> · Лицензия MIT',
          copyright: '© 2025 Currzy'
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Currzy' }
        ]
      }
    },

    hy: {
      label: "Հայերեն",
      lang: "hy-AM",
      link: "/hy/",
      themeConfig: {
        nav: [
          { text: 'Գլխավոր', link: '/hy/' },
          { text: 'Օրինակներ', link: '/hy/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Օրինակներ',
            items: [
              { text: 'Markdown օրինակներ', link: '/hy/markdown-examples' },
              { text: 'API օրինակներ', link: '/hy/api-examples' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Currzy/Currzy-js' }
        ]
      }
    }
  }
})
