import { Goal } from '@/types';

const mockDataGoals: Goal[] = [
	{
		id: 1,
		relatedVisionsIds: [1, 3],
		title: 'Learn JavaScript well',
		url: 'learn-javascript-well',
		description: 'Learn JavaScript deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 2,
		relatedVisionsIds: [1, 3],
		title: 'Learn React well',
		url: 'learn-react-well',
		description: 'Learn React deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 3,
		relatedVisionsIds: [1],
		title: 'Learn Next.js well',
		url: 'learn-nextjs-well',
		description: 'Learn Next.js deeply and master it.',
		status: 'Not Started',
		process: {
			sections: [
				{
					element: 'paragraph',
					content: 'Learn courses and learning resources for Next.js.',
				},
				{
					element: 'paragraph',
					content: 'Practice building projects with Next.js.',
				},
			],
		},
		tasks: [21],
	},
	{
		id: 4,
		relatedVisionsIds: [1],
		title: 'Learn HTML well',
		url: 'learn-html-well',
		description: 'Learn HTML deeply and master it.',
		status: 'In Progress',
		process: {
			sections: [
				{
					element: 'paragraph',
					content: 'Learn the basics elements and syntax of HTML.',
				},
				{
					element: 'paragraph',
					content: 'Learn the most common HTML tags.',
				},
				{
					element: 'paragraph',
					content: 'Learn to connect CSS and JavaScript to HTML.',
				},
			],
		},
		tasks: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],
	},
	{
		id: 5,
		relatedVisionsIds: [1],
		title: 'Learn CSS well',
		url: 'learn-css-well',
		description: 'Learn CSS deeply and master it.',
		status: 'In Progress',
	},
	{
		id: 6,
		relatedVisionsIds: [1],
		title: 'Learn Node.js well',
		url: 'learn-nodejs-well',
		description: 'Learn Node.js deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 7,
		relatedVisionsIds: [1],
		title: 'Learn Express.js well',
		url: 'learn-expressjs-well',
		description: 'Learn Express.js deeply and master it.',
		status: 'Not Started',
	},
	{
		id: 8,
		relatedVisionsIds: [1],
		title: 'Learn Illustrator well',
		url: 'learn-illustrator-well',
		description: 'Learn Illustrator deeply and master it.',
		status: 'In Progress',
	},
];

export default mockDataGoals;
