import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-stack-developer',
		company: 'DSS Consulting Kft.',
		description:
			'Full-stack enterprise software development on international projects using Java 8 (Spring/Java EE) and TypeScript (Angular).',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2018, 9, 1), to: new Date(2019, 12, 1) },
		skills: getSkills('java', 'ts', 'js', 'reactjs'),
		name: 'Full-stack developer',
		color: 'red',
		links: [],
		logo: Assets.Java,
		shortDescription:
			'Full-stack enterprise software development on international projects using Java 8 (Spring/Java EE) and TypeScript (React/Angular).'
	},
	{
		slug: 'technical-writer',
		company: 'Semcon',
		description:
			'Producing/editing CPI and technical illustrations for telecommunication software projects. Keeping contact with developer teams in Finland and Sweden. Automating tasks using Python.',
		contract: ContractType.FullTime,
		type: 'Technical Writing',
		location: 'Budapest, Hungary',
		period: { from: new Date(2016, 12, 1), to: new Date(2018, 9, 1) },
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
