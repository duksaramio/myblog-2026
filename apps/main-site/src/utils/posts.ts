import { getCollection, type CollectionEntry } from 'astro:content';

export type SiteId = 'main' | 'ai' | 'health' | 'market';

export interface UnifiedPost {
	id: string;
	collection: string;
	site: SiteId;
	siteLabel: string;
	url: string;
	isExternal: boolean;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		draft?: boolean;
		tags?: string[];
		audioUrl?: string;
		image?: string;
		lang?: 'en' | 'ko' | 'zh';
	};
}

interface SiteConfig {
	id: SiteId;
	label: string;
	domain: string;
	enCollection: 'blog' | 'ai_blog' | 'health_blog' | 'market_blog';
	koCollection: 'blog_ko' | 'ai_blog_ko' | 'health_blog_ko' | 'market_blog_ko';
	zhCollection: 'blog_zh' | 'ai_blog_zh' | 'health_blog_zh' | 'market_blog_zh';
}

const SITES: SiteConfig[] = [
	{
		id: 'main',
		label: '',
		domain: 'https://duklee.net',
		enCollection: 'blog',
		koCollection: 'blog_ko',
		zhCollection: 'blog_zh',
	},
	{
		id: 'market',
		label: 'Market',
		domain: 'https://market.duklee.net',
		enCollection: 'market_blog',
		koCollection: 'market_blog_ko',
		zhCollection: 'market_blog_zh',
	},
	{
		id: 'ai',
		label: 'AI',
		domain: 'https://ai.duklee.net',
		enCollection: 'ai_blog',
		koCollection: 'ai_blog_ko',
		zhCollection: 'ai_blog_zh',
	},
	{
		id: 'health',
		label: 'Health',
		domain: 'https://health.duklee.net',
		enCollection: 'health_blog',
		koCollection: 'health_blog_ko',
		zhCollection: 'health_blog_zh',
	},
];

export async function getUnifiedBlogPosts(locale: 'en' | 'ko' | 'zh'): Promise<UnifiedPost[]> {
	const allPosts: UnifiedPost[] = [];

	for (const site of SITES) {
		const enPosts = await getCollection(site.enCollection, ({ data }: { data: any }) => {
			return import.meta.env.PROD ? !data.draft : true;
		});
		const koPosts = await getCollection(site.koCollection, ({ data }: { data: any }) => {
			return import.meta.env.PROD ? !data.draft : true;
		});
		const zhPosts = await getCollection(site.zhCollection, ({ data }: { data: any }) => {
			return import.meta.env.PROD ? !data.draft : true;
		});

		const enMap = new Map(enPosts.map((p) => [p.id, p]));
		const koMap = new Map(koPosts.map((p) => [p.id, p]));
		const zhMap = new Map(zhPosts.map((p) => [p.id, p]));
		const allSlugs = new Set([
			...enPosts.map((p) => p.id),
			...koPosts.map((p) => p.id),
			...zhPosts.map((p) => p.id),
		]);

		for (const slug of allSlugs) {
			let post: CollectionEntry<any> | undefined;
			let postLang: 'en' | 'ko' | 'zh' = 'en';

			if (locale === 'zh') {
				if (zhMap.has(slug)) {
					post = zhMap.get(slug);
					postLang = 'zh';
				} else if (enMap.has(slug)) {
					post = enMap.get(slug);
					postLang = 'en';
				} else {
					post = koMap.get(slug);
					postLang = 'ko';
				}
			} else if (locale === 'ko') {
				if (koMap.has(slug)) {
					post = koMap.get(slug);
					postLang = 'ko';
				} else {
					post = enMap.get(slug);
					postLang = 'en';
				}
			} else {
				if (enMap.has(slug)) {
					post = enMap.get(slug);
					postLang = 'en';
				} else if (koMap.has(slug)) {
					post = koMap.get(slug);
					postLang = 'ko';
				} else {
					post = zhMap.get(slug);
					postLang = 'zh';
				}
			}

			if (!post) continue;

			let url: string;
			const langPrefix = postLang === 'en' ? '' : `/${postLang}`;
			if (site.id === 'main') {
				url = `${langPrefix}/blog/${slug}`.replace(/^\/\//, '/');
			} else {
				url = `${site.domain}${langPrefix}/blog/${slug}`;
			}

			allPosts.push({
				id: post.id,
				collection: post.collection,
				site: site.id,
				siteLabel: site.label,
				url,
				isExternal: site.id !== 'main',
				data: {
					title: post.data.title,
					description: post.data.description,
					pubDate: post.data.pubDate,
					draft: post.data.draft,
					tags: post.data.tags,
					audioUrl: post.data.audioUrl,
					image: post.data.image,
					lang: postLang,
				},
			});
		}
	}

	return allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
