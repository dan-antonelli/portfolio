import Assets from './assets';
import { getSkills } from './skills';
import type { Post } from '../types';

export const items: Array<Post> = [
	{
		slug: 'lorem-ipsum',
		color: '#5e95e3',
		description: 'Dummy blog post',
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
