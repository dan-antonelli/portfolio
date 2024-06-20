import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Build Tools & Bundlers', slug: 'build-tool/bundler' }),
	defineSkillCategory({ name: 'VCS', slug: 'vcs' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Languages', slug: 'language' }),
	defineSkillCategory({ name: 'Other', slug: 'other' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'library'
	}),
	defineSkill({
		slug: 'redux',
		color: 'purple',
		logo: Assets.Redux,
		name: 'Redux',
		category: 'library'
	}),
	defineSkill({
		slug: 'ngrx',
		color: 'purple',
		logo: Assets.Ngrx,
		name: 'Ngrx',
		category: 'library'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'teal',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'mui',
		color: 'blue',
		logo: Assets.MUI,
		name: 'MUI',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gha',
		color: 'blue',
		logo: Assets.GitHubActions,
		name: 'GitHub Actions',
		category: 'devops'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'rtl',
		color: 'red',
		logo: Assets.ReactTestingLibrary,
		name: 'React Testing Library',
		category: 'test'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'nightwatch',
		color: 'brown',
		logo: Assets.Nightwatch,
		name: 'Nightwatch',
		category: 'test'
	}),
	defineSkill({
		slug: 'webpack',
		color: 'blue',
		logo: Assets.Webpack,
		name: 'Webpack',
		category: 'build-tool/bundler'
	}),
	defineSkill({
		slug: 'vite',
		color: 'yellow',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'build-tool/bundler'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		logo: Assets.Git,
		name: 'Git',
		category: 'vcs'
	}),
	defineSkill({
		slug: 'svn',
		color: 'blue',
		logo: Assets.SVN,
		name: 'Subversion',
		category: 'vcs'
	}),
	defineSkill({
		slug: 'figma',
		color: 'pink',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	}),
	defineSkill({
		slug: 'english',
		color: 'red',
		logo: Assets.English,
		name: 'English',
		category: 'language'
	}),
	defineSkill({
		slug: 'hungarian',
		color: 'red',
		logo: Assets.Hungarian,
		name: 'Hungarian',
		category: 'language'
	}),
	defineSkill({
		slug: 'github',
		color: 'blue',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'devtools'
	})
] as const;

export const activeSkills = [
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'redux',
		color: 'purple',
		logo: Assets.Redux,
		name: 'Redux',
		category: 'library'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'teal',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'mui',
		color: 'blue',
		logo: Assets.MUI,
		name: 'MUI',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gha',
		color: 'blue',
		logo: Assets.GitHubActions,
		name: 'GitHub Actions',
		category: 'devops'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'rtl',
		color: 'red',
		logo: Assets.ReactTestingLibrary,
		name: 'React Testing Library',
		category: 'test'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'nightwatch',
		color: 'brown',
		logo: Assets.Nightwatch,
		name: 'Nightwatch',
		category: 'test'
	}),
	defineSkill({
		slug: 'webpack',
		color: 'blue',
		logo: Assets.Webpack,
		name: 'Webpack',
		category: 'build-tool/bundler'
	}),
	defineSkill({
		slug: 'vite',
		color: 'yellow',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'build-tool/bundler'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		logo: Assets.Git,
		name: 'Git',
		category: 'vcs'
	}),
	defineSkill({
		slug: 'svn',
		color: 'blue',
		logo: Assets.SVN,
		name: 'Subversion',
		category: 'vcs'
	}),
	defineSkill({
		slug: 'figma',
		color: 'pink',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	}),
	defineSkill({
		slug: 'english',
		color: 'red',
		logo: Assets.English,
		name: 'English',
		category: 'language'
	}),
	defineSkill({
		slug: 'hungarian',
		color: 'red',
		logo: Assets.Hungarian,
		name: 'Hungarian',
		category: 'language'
	})
] as const;

export const blogSkills = [
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'github',
		color: 'blue',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'opinion',
		color: 'blue',
		logo: Assets.Opinion,
		name: 'Opinion',
		category: 'other'
	}),
	defineSkill({
		slug: 'software',
		color: 'blue',
		logo: Assets.Software,
		name: 'Software',
		category: 'other'
	})
] as const;

export const storyCategories = [
	defineSkill({
		slug: 'fantasy',
		color: 'cyan',
		logo: Assets.Fantasy,
		name: 'Fantasy',
		category: 'other'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const getBlogSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => blogSkills.filter((it) => slugs.includes(it.slug));

export const getStoryCategories = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => storyCategories.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	activeSkills.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
