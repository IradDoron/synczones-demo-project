import { Skill } from '@/types';

const mockDataSkills: Skill[] = [
	{
		id: 1,
		title: 'JavaScript',
		description: 'A programming language',
		level: 'Beginner',
		inProgress: false,
		categoriesIds: [1],
		tags: ['Programming', 'Frontend'],
	},
	{
		id: 2,
		title: 'React',
		description: 'A frontend library',
		level: 'Beginner',
		inProgress: false,
		categoriesIds: [1],
		tags: ['Programming', 'Frontend'],
	},
];

export default mockDataSkills;
