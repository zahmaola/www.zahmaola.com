export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'www.zahmaola.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Zahma O La is your fastest destination to know the status of traffic in King Fahd Causeway. the link between KSA and Bahrain' },
      { hid: 'keywords', name: 'keywords', content: 'zahma, bahrain, ksa, travel, khobar, eastern, zahma o la, king fahad causeway' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author:text', name: 'author', content: 'Zahma O La' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Zahma O La' },
      { hid: 'og:description', name: 'og:description', content: 'Zahma O La is your fastest destination to know the status of traffic in King Fahd Causeway. the link between KSA and Bahrain' },
      { hid: 'og:image', name: 'og:image', content: '~/static/socialicon.png' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.zahmaola.com' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Zahma O La' },
      { hid: 'twitter:card', name: 'twitter:card', content: '~/static/socialicon.png'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Zahma O La '},
      { hid: 'twitter:description', name: 'twitter:description', content: 'Zahma O La is your fastest destination to know the status of traffic in King Fahd Causeway. the link between KSA and Bahrain'},
      { hid: 'twitter:image', name: 'twitter:image', content: '~/static/socialicon.png'},
      // { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.zahmaola.com'},
      // { hid: 'twitter:site', name: 'twitter:site', content: ''},
      // { hid: 'twitter:creator', name: 'twitter:creator', content: ''},


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },


    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" },
      { src: "../assete/js/bootstrap.bundle.min.js"},
    ]

  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/axios'
  ],
  i18n: {
    /* module options */
    defaultLocale: 'ar',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        dir: 'ltr'


      },
      {
        code: 'ar',
        file: 'ar.json',
        dir: 'rtl'


      }
    ],
    lazy: true,
    langDir: 'locales/',
    vueI18n:{
      fallbackLocal: 'ar',
      defaultDirection: 'rtl',
    }
  },
  plugins: [
    '~/plugins/i18n.js',
  ],
  axios: {
    baseURL:"/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
