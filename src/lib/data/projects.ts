import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import jobs from '@images/projects/jobs.png';

export const items: Array<Project> = [
	{
		slug: 'jobs-tracker',
		color: '#5e95e3',
		description: 'Job tracking app to help you keep track of your job applications.',
		shortDescription: 'Job tracking app to help you keep track of your job applications.',
		links: [{ to: 'https://github.com/violettomania/jobs', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Job Tracker',
		skills: getSkills('reactjs', 'redux', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/jobs',
		img: jobs
	}
];

export const title = 'Projects';
