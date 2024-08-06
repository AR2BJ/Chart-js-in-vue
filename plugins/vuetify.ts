// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#5db7d3",
            secondary: "#cceaf1",
            background: "#fff",
            accent: "#5db7d380",
            Tertiary: "#949494",
            surface: "#dcdcdc",
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});
