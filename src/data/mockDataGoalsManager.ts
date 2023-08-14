import type { UserGoalsManagerStore } from '@/types';

const mockDataGoalsManager: UserGoalsManagerStore = {
	visions: [
		{
			id: 1,
			title: 'Create top-class applications',
			description:
				'Create top-class applications that are used by millions of people.',
			createdAt: new Date('2023-08-01'),
		},
		{
			id: 2,
			title: 'Get in shape like a greek god',
			description: 'Get six-pack abs, big biceps, and a strong back.',
			createdAt: new Date('2023-08-01'),
		},
		{
			id: 3,
			title: 'Become a millionaire',
			description: 'Become a millionaire by the age of 40.',
			createdAt: new Date('2023-08-01'),
		},
		{
			id: 4,
			title: 'Find a life partner and have an happy family',
			description:
				'Find a girlfriend, get married, have kids and raise them well.',
			createdAt: new Date('2023-08-01'),
		},
	],
	goals: [
		{
			id: 1,
			visionId: 1,
			title: 'Learn JavaScript well',
			description: 'Learn JavaScript deeply and master it.',
			startDate: new Date('2023-08-01'),
			endDate: new Date('2023-10-01'),
			isCompleted: false,
		},
	],
};

export default mockDataGoalsManager;
