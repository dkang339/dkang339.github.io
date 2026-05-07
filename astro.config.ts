import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
	site: "https://dkang339.github.io/",
	integrations: [sitemap(), mdx(), icon()],
});
