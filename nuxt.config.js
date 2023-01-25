export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Zahma O La",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Zahma O La is your fastest destination to know the status of traffic in King Fahd Causeway. the link between KSA and Bahrain",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "zahma, bahrain, ksa, travel, khobar, eastern, zahma o la, king fahad causeway",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "author:text", name: "author", content: "Zahma O La" },
      { hid: "og:type", name: "og:type", content: "website" },
      { hid: "og:title", name: "og:title", content: "Zahma O La" },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Zahma O La is your fastest destination to know the status of traffic in King Fahd Causeway. the link between KSA and Bahrain",
      },
      { hid: "og:image", name: "og:image", content: "~/static/socialicon.png" },
      { hid: "og:url", name: "og:url", content: "https://www.zahmaola.com" },
      { hid: "og:site_name", name: "og:site_name", content: "Zahma O La" },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "~/static/socialicon.png",
      },
      { hid: "twitter:title", name: "twitter:title", content: "Zahma O La " },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Zahma O La is your fastest destination to know the status of traffic in King Fahd Causeway. the link between KSA and Bahrain",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "~/static/socialicon.png",
      },

      {
        hid: "smartbanner:title",
        name: "smartbanner:title",
        content: "Zahma O La",
      },
      {
        hid: "smartbanner:author",
        name: "smartbanner:author",
        content: "Promotion Efficiency",
      },

      { hid: "smartbanner:price", name: "smartbanner:price", content: "FREE" },
      {
        hid: "smartbanner:price-suffix-apple",
        name: "smartbanner:price-suffix-apple",
        content: " - On the App Store",
      },
      {
        hid: "smartbanner:price-suffix-google",
        name: "smartbanner:price-suffix-google",
        content: " - In Google Play",
      },
      {
        hid: "smartbanner:icon-google",
        name: "smartbanner:icon-google",
        content: "/favicon.ico",
      },
      {
        hid: "smartbanner:icon-apple",
        name: "smartbanner:icon-apple",
        content: "/favicon.ico",
      },
      {
        hid: "smartbanner:button",
        name: "smartbanner:button",
        content: "VIEW",
      },
      {
        hid: "smartbanner:button-url-apple",
        name: "smartbanner:button-url-apple",
        content:
          "https://apps.apple.com/sa/app/%D8%B2%D8%AD%D9%85%D8%A9-%D8%A3%D9%88-%D9%84%D8%A7-zahma-o-la/id654895985",
      },
      {
        hid: "smartbanner:button-url-google",
        name: "smartbanner:button-url-google",
        content:
          "https://play.google.com/store/apps/details?id=com.zahmaola.zahma",
      },
      {
        hid: "smartbanner:enabled-platforms",
        name: "smartbanner:enabled-platforms",
        content: "android,ios",
      },
      {
        hid: "smartbanner:close-label",
        name: "smartbanner:close-label",
        content: "Close",
      },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/smartbanner.js/1.19.1/smartbanner.css",
      },
    ],

    script: [
      {
        src: "//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
      },
      { src: "../assete/js/bootstrap.bundle.min.js" },
      { src: "//webforms.pipedrive.com/f/loader" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/smartbanner.js/1.19.1/smartbanner.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
  ],
  i18n: {
    /* module options */
    defaultLocale: "ar",
    locales: [
      {
        code: "en",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "ar",
        file: "ar.json",
        dir: "rtl",
      },
    ],
    lazy: true,
    langDir: "locales/",
    vueI18n: {
      fallbackLocal: "ar",
      defaultDirection: "rtl",
    },
  },
  plugins: ["~/plugins/i18n.js"],
  axios: {
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
