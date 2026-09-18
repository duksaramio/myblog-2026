import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import profile from '../../data/profile.json';
import { ui } from '../../i18n/ui';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('blog', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});

	const sortedPosts = posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	return rss({
		title: `${profile.site.title} (한국어)`,
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
