import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'frontend-developer-2',
		company: 'Diligent Corporation',
		description:
			'Developing a Google Drive-esque file sharing web application in React + TypeScript.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2022, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'reactjs', 'redux', 'jest', 'nightwatch', 'gha', 'git', 'docker'),
		name: 'Senior Frontend Developer',
		color: 'yellow',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: `Developing **Secure File Sharing**, a Google Drive-like file sharing web application focused on security. The app is developed in **React
		+ TypeScript**, serving thousands of users.
		<br>* Optimized the application to run seamlessly for over 3 thousand users by refactoring large portions and migrating to React 18.
		<br>* Containerized our separate environments using Docker that sped up development speed by 20%.
		<br>* Introduced styled components and implemented an internal design system to improve cooperation with the designer team, and to
		speed up the development by 20%.
		<br>* Improved the test coverage by 35% through the introduction of component- and unit tests.
		<br>* Introduced Google code review standards within the team.`,
		href: '',
		img: ''
	},
	{
		slug: 'fullstack-developer-3',
		company: 'Budapest Bank / OTP Bank',
		description: 'Front-end development on a netbank application in React + TypeScript.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2021, 0, 1), to: new Date(2022, 2, 1) },
		skills: getSkills('java', 'nodejs', 'ts', 'js', 'reactjs', 'redux', 'git'),
		name: 'Full-stack Developer',
		color: 'red',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: `Full-stack development on a **netbank application** in Spring/NodeJS/React + TypeScript.
			<br><br>* Developing and maintaining features used by hundreds of thousands of users in Hungary
			<br>* Feature development on authentication/authorization microservices that significantly sped up the authentication/authorization process, improving user experience
			<br>* Writing new microservices and refactoring existing ones from Java as part of a company-wide migration to NodeJS
			<br>* Ensuring excellent test coverage both on the front- and on the backend`,
		href: '',
		img: ''
	},
	{
		slug: 'full-stack-developer-2',
		company: 'Zen Studios',
		description:
			'Full-stack web development (NodeJS/React + TypeScript) on internal applications. Tool development using Python.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('nodejs', 'ts', 'js', 'reactjs', 'redux', 'jenkins', 'svn'),
		name: 'Full-stack Developer',
		color: 'green',
		links: [],
		logo: Assets.NodeJs,
		shortDescription: `Full-stack web development (NodeJS/React + TypeScript) on **internal applications**. **Tool development** using Python.
			<br><br>* Helping developers by developing internal tools that significantly sped up the development process, including archiving tool, custom configuration file parsers, and a visual coding platform prototype for game designers
			<br>* Developing an internal website that interfaced with a Postgres database, enabling customer support to easily handle customer complaints and requests
			<br>* CI/CD: Managing build pipelines & scripting (using Jenkins, Python, Bash)`,
		href: '',
		img: ''
	},
	{
		slug: 'full-stack-developer-1',
		company: 'DSS Consulting Kft.',
		description:
			'Developed a web application for an automated workbench solution produced by Bosch using Angular + TypeScript and Java (Spring/Java EE).',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2018, 9, 1), to: new Date(2019, 12, 1) },
		skills: getSkills('java', 'ts', 'js', 'angular', 'ngrx', 'git'),
		name: 'Full-stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Java,
		shortDescription:
			'Developed a web application for an automated workbench solution produced by Bosch using Angular + TypeScript and Java (Spring/Java EE).',
		href: '',
		img: ''
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
			'Produced/edited technical documentation & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python',
		href: '',
		img: ''
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
		color: 'red',
		links: [],
		logo: Assets.OddJobs,
		shortDescription:
			'Volunteer Experience (Germany, 1 year) | English teaching | Call center | Other non-technical roles (Budapest)',
		href: '',
		img: ''
	}
];

export const title = 'Experience';
