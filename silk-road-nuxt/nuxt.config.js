export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Silk Road Media',
    htmlAttrs: {
      lang: 'ru',
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        // TODO Image Title Desription
        content: '/main.png',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "Купить книги культурного наследия Узбекистана Buy books of cultural heritage of Uzbekistan O'zbekiston madaniy merosi kitoblarini sotib olish",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Книги издательского дома Silk Road Media',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Silk Road Media',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'silk road media, books, buy books, купить книги, книги, nashriyot uyi, издательский дом, издательство, publishing house',
      },
      {
        hid: 'copyright',
        name: 'copyright',
        content: 'silk Road Media',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index,follow',
      },
      {
        hid: 'summary',
        name: 'summary',
        content: 'Silk road media Publishing house',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Al-Electronics',
      },
      {
        hid: 'owner',
        name: 'owner',
        content: 'Rashidov Savlat',
      },
      {
        hid: 'category',
        name: 'category',
        content: 'ecommerce',
      },
      {
        hid: 'coverage',
        name: 'coverage',
        content: 'Worldwide',
      },
      {
        hid: 'distribution',
        name: 'distribution',
        content: 'Global',
      },
      {
        hid: 'rating',
        name: 'rating',
        content: 'General',
      },
      {
        hid: 'revisit-after',
        name: 'revisit-after',
        content: '7 days',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Silk road media Publishing house',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Comfortaa&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.15.2/css/all.css',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@1&family=Raleway:ital,wght@1,300&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=Raleway:ital,wght@1,300&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,700&family=Raleway:ital,wght@1,300&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Alegreya:wght@500&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.15.2/css/all.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json',
        dir: 'ltr',
      },
      {
        code: 'uz',
        iso: 'uz-UZ',
        file: 'uz.json',
        dir: 'ltr',
      },
    ],
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
