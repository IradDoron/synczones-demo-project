import { Goal } from '@/types';

const mockDataGoals: Goal[] = [
	{
		id: 1,
		relatedVisionsIds: [1, 3],
		title: 'Learn JavaScript well',
		description: 'Learn JavaScript deeply and master it.',
		isCompleted: false,
	},
	{
		id: 2,
		relatedVisionsIds: [1, 3],
		title: 'Learn React well',
		description: 'Learn React deeply and master it.',
		isCompleted: false,
	},
	{
		id: 3,
		relatedVisionsIds: [1],
		title: 'Learn Next.js well',
		description: 'Learn Next.js deeply and master it.',
		isCompleted: false,
	},
];

export default mockDataGoals;
