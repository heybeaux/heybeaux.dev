import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    period: z.string(),
    status: z.enum(['active', 'completed']),
    externalLink: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    challenge: z.string(),
    solution: z.string(),
    outcome: z.string(),
    image: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, work, pages };
