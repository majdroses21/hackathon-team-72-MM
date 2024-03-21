// import { ar } from "vuetify/locale";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
  buildModules:['@nuxtjs/fontawesome'],
  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
   },
  build: {
    transpile: ["vuetify"],
  },
  loadingTemplate: '~/public/loading.html',
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