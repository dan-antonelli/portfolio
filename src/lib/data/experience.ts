import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'frontend-developer-2',
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
		slug: 'frontend-developer',
		company: 'Budapest Bank / OTP Bank',
		description: 'Front-end development on internal applications in React/TypeScript.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2021, 0, 1), to: new Date(2022, 2, 1) },
		skills: getSkills('ts', 'js', 'reactjs'),
		name: 'Frontend Developer',
		color: 'red',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: 'Front-end development on internal applications in React/TypeScript.'
	},
	{
		slug: 'full-stack-developer-2',
		company: 'Zen Studios',
		description:
			'Full-stack web development (React/TypeScript, Java Spring) on internal game dev applications | CI/CD: Managing build pipelines & scripting',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('java', 'ts', 'js', 'reactjs', 'jenkins'),
		name: 'Full-stack Developer',
		color: 'yellow',
		links: [],
		logo: Assets.ReactJs,
		shortDescription:
			'Full-stack web development (React/TypeScript, Java Spring) on internal game dev applications | CI/CD: Managing build pipelines & scripting'
	},
	{
		slug: 'full-stack-developer-1',
		company: 'DSS Consulting Kft.',
		description:
			'Developed a web application for an automated workbench solution produced by Bosch using React/Typescript and Java (Spring/Java EE).',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2018, 9, 1), to: new Date(2019, 12, 1) },
		skills: getSkills('java', 'ts', 'js', 'reactjs'),
		name: 'Full-stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Java,
		shortDescription:
			'Developed a web application for an automated workbench solution produced by Bosch using React/Typescript and Java (Spring/Java EE).'
	},
	{
		slug: 'technical-writer',
		company: 'Semcon',
		description:
			'Produced/edited technical documentation & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python',
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
			'Produced/edited technical documentation & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python'
	},
	{
		slug: 'non-technical-jobs',
		company: 'various',
		description:
			'Volunteer Experience (Germany, 1 year) | English teaching | Call center | Other non-technical roles (Budapest)',
		contract: ContractType.FullTime,
		type: 'Non-technical jobs',
		location: 'Oldenburg, Germany / Budapest, Hungary',
		period: { from: new Date(2010, 0, 1), to: new Date(2016, 12, 1) },
		skills: getSkills(''),
		name: 'Non-technical jobs',
		color: 'blue',
		links: [],
		logo: Assets.OddJobs,
		shortDescription:
			'Volunteer Experience (Germany, 1 year) | English teaching | Call center | Other non-technical roles (Budapest)'
	}
];

export const title = 'Experience';

// TODO: default dark mode
// TODO: different browsers
