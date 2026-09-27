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
		title: '이덕희 | Market (한국어)',
		description: '주식 시장, 거시 경제, 테크 기업 밸류에이션 및 자본 배분에 대한 데이터 기반 분석과 통찰을 기록하는 공간',
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
