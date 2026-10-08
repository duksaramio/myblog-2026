import rss from '@astrojs/rss';
import { getUnifiedBlogPosts } from '../utils/posts';
import profile from '../data/profile.json';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getUnifiedBlogPosts('en');

	return rss({
		title: profile.site.title,
		description: profile.site.description,
		site: context.site || new URL(profile.seo.og.url),
		items: posts.map((post) => ({
			title: post.siteLabel ? `[${post.siteLabel}] ${post.data.title}` : post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: post.url,
		})),
		customData: `<language>en-us</language>`,
	});
}
