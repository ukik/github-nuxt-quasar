// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/custom.scss',
    "@/theme/variables.css"
  ],
  modules: [
    'nuxt-quasar-ui',
    "@nuxtjs/ionic"
  ],
  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
  ssr: true,
  ionic: {
    integrations: {
      icons: true,
    },
    config: {
      // ...
    },    
  },  
  pages: true,
  devtools: { enabled: true }
});
