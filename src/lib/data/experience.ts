import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'frontend-developer',
		company: 'Diligent Corporation',
		description: 'Developing SaaS products in React and TypeScript.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2022, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'reactjs'),
		name: 'Senior Frontend Developer',
		color: 'red',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: 'Developing SaaS products in React and TypeScript.'
	},
	{
		slug: 'full-stack developer',
		company: 'Zen Studios',
		description:
			'Full-stack web application development of internal apps at a game developer company using Java 8 (Spring) and TypeScript (React). Managing build pipelines and build scripts for game builds. Occasional tool development.',
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
			'Full-stack web application development of internal apps at a game developer company using Java 8 (Spring) and TypeScript (React). Managing build pipelines and build scripts for game builds. Occasional tool development.'
	},
	{
		slug: 'full-stack-developer',
		company: 'DSS Consulting Kft.',
		description:
			'Full-stack enterprise software development on international projects using Java 8 (Spring/Java EE) and React/Typescript.',
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
	}
];

export const title = 'Experience';

// TODO: java icon too small
// TODO: add banking jobs
// TODO: more detailed descriptions
// TODO: lump previous jobs together
// TODO: default dark mode
// TODO: different browsers
// TODO: put back titles
// TODO: colored cards for Education, no animation
