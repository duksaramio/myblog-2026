import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import profile from '../../data/profile.json';
import { ui } from '../../i18n/ui';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const koPosts = await getCollection('blog_ko', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
	const enPosts = await getCollection('blog', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});

	const koPostMap = new Map(koPosts.map((p) => [p.id, p]));
	const allSlugs = new Set([...koPosts.map((p) => p.id), ...enPosts.map((p) => p.id)]);

	const sortedPosts = Array.from(allSlugs).map((slug) => {
		return koPostMap.get(slug) || enPosts.find((p) => p.id === slug)!;
	}).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: `${ui.ko['site.title']} (한국어)`,
		description: ui.ko['site.description'],
		site: context.site || new URL(profile.seo.og.url),
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/ko/blog/${post.id}/`,
		})),
		customData: `<language>ko-kr</language>`,
	});
}
