import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		summary: z.string().optional(),
		thumbnail: z.string().optional(),
		date: z.coerce.date().optional(),
		images: z.array(z.string()).optional(),
		pdf: z.string().optional(),
		github: z.string().optional(),
	}),
});

export const collections = { projects };
