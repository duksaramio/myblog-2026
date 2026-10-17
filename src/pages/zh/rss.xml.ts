import rss from '@astrojs/rss';
import { getUnifiedBlogPosts } from '../../utils/posts';
import profile from '../../data/profile.json';
import { ui } from '../../i18n/ui';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getUnifiedBlogPosts('zh');

	return rss({
		title: `${ui.zh['site.title']} (中文)`,
		description: ui.zh['site.description'],
		site: context.site || new URL(profile.seo.og.url),
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: post.url,
		})),
		customData: `<language>zh-cn</language>`,
	});
}
