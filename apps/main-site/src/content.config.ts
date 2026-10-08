import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	draft: z.boolean().optional().default(false),
	tags: z.array(z.string()).optional().default([]),
	audioUrl: z.string().optional(),
	image: z.string().optional(),
	lang: z.enum(['en', 'ko']).optional().default('en'),
});

const postKoSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	draft: z.boolean().optional().default(false),
	tags: z.array(z.string()).optional().default([]),
	audioUrl: z.string().optional(),
	image: z.string().optional(),
	lang: z.enum(['en', 'ko']).optional().default('ko'),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: postSchema,
});

const nakseojang = defineCollection({
	loader: glob({ pattern: 'index.md', base: './src/content/nakseojang' }),
	schema: z.object({
		title: z.string().optional().default('낙서장'),
		description: z.string().optional().default(''),
	}),
});

const blog_ko = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog_ko' }),
	schema: postKoSchema,
});

const ai_blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: '../ai-site/src/content/blog' }),
	schema: postSchema,
});

const ai_blog_ko = defineCollection({
	loader: glob({ pattern: '**/*.md', base: '../ai-site/src/content/blog_ko' }),
	schema: postKoSchema,
});

const health_blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: '../health-site/src/content/blog' }),
	schema: postSchema,
});

const health_blog_ko = defineCollection({
	loader: glob({ pattern: '**/*.md', base: '../health-site/src/content/blog_ko' }),
	schema: postKoSchema,
});

const market_blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: '../market-site/src/content/blog' }),
	schema: postSchema,
});

const market_blog_ko = defineCollection({
	loader: glob({ pattern: '**/*.md', base: '../market-site/src/content/blog_ko' }),
	schema: postKoSchema,
});

export const collections = {
	blog,
	nakseojang,
	blog_ko,
	ai_blog,
	ai_blog_ko,
	health_blog,
	health_blog_ko,
	market_blog,
	market_blog_ko,
};
