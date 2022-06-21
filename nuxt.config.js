import { resolve } from "path";

export default {
  server: {
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
  },
  alias: {
    '@styles': resolve(__dirname, './assets/styles'),
    '@svg': resolve(__dirname, './assets/img/svg'),
    '@png': resolve(__dirname, './assets/img/png'),
    '@approck': resolve(__dirname, './node_modules/@approck-pro/approck-design/src'),
    '~@assets': resolve(__dirname, './node_modules/@approck-pro/approck-design/src/assets'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-ui',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@approck-pro/approck-design/dist/approck-design.min.css',
    '~/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/approck-design.js',
    '~/plugins/mdi.js',
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/projects'
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/v1/login/', method: 'post' },
          logout: { url: '/v1/logout/', method: 'post' },
          user: { url: '/v1/user/', method: 'get' },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['mdi-vue'],
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
    },
  },

  router: {
    middleware: ['auth', 'auth-query-param'],
  },
};
