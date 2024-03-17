import { ar } from "vuetify/locale";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    // تعيين اللغة والاتجاه
    rtl: true,
    defaultLocale: 'ar',
  },
  locales: [
    {
      code: 'ar',
      iso: 'ar-AR',
      name: 'Arabic'
    }
  ],
  css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],


})
// export default {
//   devtools: { enabled: true },
//   css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
//   build: {
//     transpile: ["vuetify"],
//   }
// }