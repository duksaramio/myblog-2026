import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import profile from '../../data/profile.json';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const zhPosts = await getCollection('blog_zh', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
	const enPosts = await getCollection('blog', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});

	const zhPostMap = new Map(zhPosts.map((p) => [p.id, p]));
	const allSlugs = new Set([...zhPosts.map((p) => p.id), ...enPosts.map((p) => p.id)]);

	const sortedPosts = Array.from(allSlugs).map((slug) => {
		return zhPostMap.get(slug) || enPosts.find((p) => p.id === slug)!;
	}).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: '李德熙 | AI (中文)',
		description: 'AI 智能体调研并生成的关于人工智能、大语言模型架构与自主智能体的研究札记与实验',
		site: context.site || new URL(profile.seo.og.url),
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/zh/blog/${post.id}/`,
		})),
		customData: `<language>zh-cn</language>`,
	});
}
