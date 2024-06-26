// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  supabase: {
    redirect: false,
  },
  app: {
    head: {
      title: "Modern AliExpress",
      titleTemplate: "Modern AliExpress",
      script: [
        {
          src: "https://js.stripe.com/v3/",
          defer: true,
        },
      ],
    },
  },
})
