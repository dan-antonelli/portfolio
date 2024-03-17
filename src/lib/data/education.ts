import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Java developer (focusing on Spring)',
		description:
			'A 6-month backend developer bootcamp focused on Java, relational databases, Spring, and Agile.',
		location: 'Budapest, Hungary',
		logo: Assets.Java,
		name: '',
		organization: 'Braining Hub - Education Center',
		period: { from: new Date(2018, 0, 1), to: new Date(2018, 7, 1) },
		shortDescription: 'Java developer bootcamp.',
		slug: 'java-developer-bootcamp',
		subjects: ['Algorithms and Data structures', 'Java', 'Spring', 'Relational databases', 'Agile'],
		color: 'red'
	},
	{
		degree: 'Google Developer Challenge Scholarship',
		description:
			'A 4-month course organized by Udacity and Google. Studied Java and UI development for Android apps.',
		location: 'Online',
		logo: Assets.Android,
		name: 'Android scholarship',
		organization: 'Google',
		period: { from: new Date(2017, 0, 1), to: new Date(2018, 0, 1) },
		shortDescription: 'Android scholarship by Google and Udacity.',
		slug: 'android-scholarship',
		subjects: ['Java', 'Android', 'UI development'],
		color: 'green'
	},
	{
		degree: 'Bachelor of Arts',
		description: 'Hungarian Language and Literature',
		location: 'Debrecen, Hungary',
		logo: Assets.University,
		name: 'Bachelor of Arts',
		organization: 'University of Debrecen',
		period: { from: new Date(2006, 0, 1), to: new Date(2010, 0, 1) },
		shortDescription: 'Bachelor of Arts',
		slug: 'faculty-of-humanities',
		subjects: ['Grammar', 'Literature', 'Pedagogy'],
		color: 'blue'
	}
];

export const title = 'Education';
