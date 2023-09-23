import { Goal } from '@/types';

const mockDataGoals: Goal[] = [
	{
		id: 1,
		relatedVisionsIds: [1, 3],
		title: 'Learn JavaScript well',
		description: 'Learn JavaScript deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 2,
		relatedVisionsIds: [1, 3],
		title: 'Learn React well',
		description: 'Learn React deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 3,
		relatedVisionsIds: [1],
		title: 'Learn Next.js well',
		description: 'Learn Next.js deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 4,
		relatedVisionsIds: [1],
		title: 'Learn HTML well',
		description: 'Learn HTML deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 5,
		relatedVisionsIds: [1],
		title: 'Learn CSS well',
		description: 'Learn CSS deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 6,
		relatedVisionsIds: [1],
		title: 'Learn Node.js well',
		description: 'Learn Node.js deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 7,
		relatedVisionsIds: [1],
		title: 'Learn Express.js well',
		description: 'Learn Express.js deeply and master it.',
		status: 'Not Started',
	},
];

export default mockDataGoals;
