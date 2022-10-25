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
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
