import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'english-teacher',
		company: 'Alma Mater Language School',
		description: 'Holding English courses for adults.',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'Budapest, Hungary',
		period: { from: new Date(2014, 0, 1), to: new Date(2016, 0, 1) },
		skills: getSkills('english'),
		name: 'English Teacher',
		color: 'green',
		links: [],
		logo: Assets.University,
		shortDescription: 'Holding English courses for adults.'
	}
];

export const title = 'Experience';
