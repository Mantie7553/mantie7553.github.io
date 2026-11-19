// collection definitions

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects"}),
    schema: ({ image }) => z.object({
        title: z.string(),
        summary: z.string(),
        stack: z.array(z.string()),
        status: z.enum(["done", "in-progress", "paused"]),
        order: z.number().int(),
        repo: z.string().optional(),
        featured: z.boolean().default(false),
        cover: z.object({
            src: image(),
            alt: z.string(),
        }).optional(),
    }),
});

export const collections = { projects };