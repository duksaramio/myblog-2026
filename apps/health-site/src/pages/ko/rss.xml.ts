import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import profile from '../../data/profile.json';
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
		title: '이덕희 | Health (한국어)',
		description: '건강, 장수, 대사 건강, 피트니스 및 웰니스에 대한 생각과 실험을 기록하는 공간',
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
