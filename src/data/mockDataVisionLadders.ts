import { VisionComponentLadder } from '@/types';

const mockDataVisionLadders: VisionComponentLadder[] = [
	{
		id: 1,
		visionComponentId: 1,
		steps: [
			{
				title: 'Learn Full Stack Tech',
				description: 'Learn full stack tech to build full stack apps.',
				goalIds: [1, 2, 3],
			},
			{
				title: 'Learn the basic Backend Tech',
				description: 'Learn the basic backend tech to build backend apps.',
				goalIds: [],
			},
			{
				title: 'Learn the basic Frontend Tech',
				description: 'Learn the basic frontend tech to build frontend apps.',
				goalIds: [],
			},
		],
	},
];

export default mockDataVisionLadders;
