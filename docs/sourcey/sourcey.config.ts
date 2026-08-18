import { defineConfig, markdown } from "sourcey";

export default defineConfig({
  name: "dayjs",
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        source: markdown({
          groups: [
            { group: "Getting Started", pages: ["introduction", "installation"] },
            { group: "API Reference", pages: ["parsing", "get-set", "manipulating", "displaying", "querying", "formatting"] },
            { group: "Advanced", pages: ["plugins", "i18n"] },
          ],
        }),
      },
    ],
  },
  theme: {
    preset: "default",
    colors: {
      primary: "#7928CA",
    },
  },
  repo: "https://github.com/iamkun/dayjs",
  search: {},
  navbar: {
    links: [
      { type: "github", href: "https://github.com/iamkun/dayjs" },
    ],
  },
  footer: {
    links: [
      { type: "link", href: "https://day.js.org", label: "day.js.org" },
      { type: "link", href: "https://github.com/iamkun/dayjs", label: "GitHub" },
    ],
  },
});
