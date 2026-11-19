// collection definitions

import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects"}),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        stack: z.array(z.string()),
        status: z.enum(["done", "in-progress", "paused"]),
        order: z.number(),

    })
})

export const collections = { projects };