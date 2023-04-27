import { defineConfig } from "vigor-moon";

export default defineConfig({
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "Getting Started",
              link: "/guide/quickStart",
            },
          ],
        },
      ],
    },
  },
});
