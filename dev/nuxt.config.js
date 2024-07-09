// import { ar } from "vuetify/locale";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  ssr: false,
  devtools: { enabled: true },
  app:{
    pageTransition:{
      name: "page",
      mode: "in-out"
    }
  },
  
  // تعيين اللغة والاتجاه
  dir: {
    rtl: true,
    defaultLocale: "ar",
  },
  locales: [
    {
      code: "ar",
      iso: "ar-AR",
      name: "Arabic",
    },
  ],
  css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  build: {
    transpile: ["vue-sonner", "vuetify"],
  },
  loadingTemplate: "~/public/loading.html",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    imports: [
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },
});