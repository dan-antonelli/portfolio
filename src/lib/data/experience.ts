import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'frontend-developer',
		company: 'Diligent Corporation',
		description: 'Developing a Google Drive-like file sharing web application in React/TypeScript.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2022, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'reactjs'),
		name: 'Senior Frontend Developer',
		color: 'red',
		links: [],
		logo: Assets.ReactJs,
		shortDescription:
			'Developing a Google Drive-like file sharing web application in React/TypeScript.'
	},
	{
		slug: 'full-stack developer',
		company: 'Zen Studios',
		description:
			'Full-stack web application development of internal apps at a game developer company using React/Typescript and Java (Spring). Managing build pipelines and build scripts for game builds. Occasional tool development.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 2, 1) },
		skills: getSkills('java', 'ts', 'js', 'reactjs', 'jenkins'),
		name: 'Full-stack developer',
		color: 'yellow',
		links: [],
		logo: Assets.ReactJs,
		shortDescription:
			'Full-stack web application development of internal apps at a game developer company using React/Typescript and Java (Spring). Managing build pipelines and build scripts for game builds. Occasional tool development.'
	},
	{
		slug: 'full-stack-developer',
		company: 'DSS Consulting Kft.',
		description:
			'Developing a web application for an automated workbench solution produced by Bosch using React/Typescript and Java (Spring/Java EE).',
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
			'Developing a web application for an automated workbench solution produced by Bosch using React/Typescript and Java (Spring/Java EE).'
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
	}
];

export const title = 'Experience';

// TODO: java icon too small
// TODO: default dark mode
// TODO: different browsers
