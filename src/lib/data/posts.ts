import Assets from './assets';
import { getSkills } from './skills';
import type { Post } from '../types';

export const items: Array<Post> = [
	{
		slug: 'test-post',
		color: '#5e95e3',
		description: `What is Lorem Ipsum?
--------------------

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		shortDescription: 'Just testing the blog post layout. Come back later for real content! :)',
		links: [],
		logo: Assets.Writing,
		name: 'Blog post title',
		period: {
			from: new Date()
		},
		skills: getSkills('reactjs'),
		type: ''
	}
];

export const title = 'Blog posts';
