import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional().default([]),
		audioUrl: z.string().optional(),
		image: z.string().optional(),
		lang: z.enum(['en', 'ko']).optional().default('en'),
	}),
});

const blog_ko = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog_ko' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional().default([]),
		audioUrl: z.string().optional(),
		image: z.string().optional(),
		lang: z.enum(['en', 'ko']).optional().default('ko'),
	}),
});

export const collections = { blog, blog_ko };
