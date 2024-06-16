import { items } from '@data/stories';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const post = items.find((item) => {
			return item.slug === params.slug;
		});

		return { post };
	}
}
