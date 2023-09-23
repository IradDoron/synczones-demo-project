import { VisionComponentLadder } from '@/types';

const mockDataVisionComponentLadders: VisionComponentLadder[] = [
	{
		id: 1,
		visionComponentId: 1,
		steps: [
			{
				title: 'Implement Designed Websites and Apps',
				description: 'Implement designed websites and apps to make them work.',
				goalIds: [],
			},
			{
				title: 'Design Websites and Apps',
				description: 'Design websites and apps to make them look good.',
				goalIds: [],
			},
			{
				title: 'Learn UI/UX Design',
				description: 'Learn UI/UX design to design beautiful apps.',
				goalIds: [],
			},
			{
				title: 'Learn Digital Design',
				description: 'Learn digital design to design digital apps.',
				goalIds: [],
			},
			{
				title: 'Learn Full Stack Tech',
				description: 'Learn full stack tech to build full stack apps.',
				goalIds: [2, 3],
			},
			{
				title: 'Learn the basic Backend Tech',
				description: 'Learn the basic backend tech to build backend apps.',
				goalIds: [6, 7],
			},
			{
				title: 'Learn the basic Frontend Tech',
				description: 'Learn the basic frontend tech to build frontend apps.',
				goalIds: [4, 5, 1],
			},
		],
	},
];

export default mockDataVisionComponentLadders;
