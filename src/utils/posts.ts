import { getCollection, type CollectionEntry } from 'astro:content';

export interface UnifiedPost {
	id: string;
	collection: string;
	url: string;
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

export async function getUnifiedBlogPosts(locale: 'en' | 'ko' | 'zh'): Promise<UnifiedPost[]> {
	const enPosts = await getCollection('blog', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
	const koPosts = await getCollection('blog_ko', ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
	const zhPosts = await getCollection('blog_zh', ({ data }) => {
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

	const allPosts: UnifiedPost[] = [];

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

		const langPrefix = postLang === 'en' ? '' : `/${postLang}`;
		const url = `${langPrefix}/blog/${slug}`.replace(/^\/\//, '/');

		allPosts.push({
			id: post.id,
			collection: post.collection,
			url,
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

	return allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
