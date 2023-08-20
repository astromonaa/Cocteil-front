// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/public/css/variables.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  devtools: {enabled: false},
  googleFonts: {
    families: {
      'Roboto': [300, 400],
      'Bad Script': [400]
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    '@pinia/nuxt',
    '@nuxtjs/device',
    'nuxt-lazy-load'
  ],
  device: {
    refreshOnResize: true
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in' // default
    }
  },
  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    defaultImage: '/img/default-image.png',

    loadingClass: false,
    loadedClass: false,
    appendClass: false,

    observerConfig: {
      // See IntersectionObserver documentation
    }
  }
})
