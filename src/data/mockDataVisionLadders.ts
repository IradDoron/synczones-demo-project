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
		],
	},
];

export default mockDataVisionLadders;
