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
		slug: 'technical-writer',
		company: 'Semcon',
		description:
			'Producing/editing CPI and technical illustrations for telecommunication software projects. Keeping contact with developer teams in Finland and Sweden. Automating tasks using Python.',
		contract: ContractType.FullTime,
		type: 'Technical Writing',
		location: 'Budapest, Hungary',
		period: { from: new Date(2016, 12, 1), to: new Date(2018, 0, 1) },
		skills: getSkills(''),
		name: 'Technical Writer',
		color: 'blue',
		links: [],
		logo: Assets.Writing,
		shortDescription:
			'Producing/editing documentation and technical illustrations for telecommunication software projects. Keeping contact with developer teams in Finland and Sweden. Automating tasks using Python.'
	},
	{
		slug: 'english-teacher',
		company: 'Alma Mater Language School',
		description: 'Holding English courses for adults.',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'Budapest, Hungary',
		period: { from: new Date(2014, 0, 1), to: new Date(2016, 12, 1) },
		skills: getSkills('english'),
		name: 'English Teacher',
		color: 'green',
		links: [],
		logo: Assets.University,
		shortDescription: 'Holding English courses for adults.'
	}
];

export const title = 'Experience';
