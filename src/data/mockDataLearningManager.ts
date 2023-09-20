import { UserLearningManagerStore } from '@/types';

const mockDataLearningManager: UserLearningManagerStore = {
	learningEnvironments: [
		{
			id: 1,
			title: 'Digital Design at HackerU',
			description: 'Full course on digital design',
			type: 'Course',
			subLearningEnvironments: [
				{
					id: 2,
					title: 'Illustrator',
					description: 'In depth course on Illustrator',
					type: 'Technology',
				},
				{
					id: 3,
					title: 'Photoshop',
					description: 'In depth course on Photoshop',
					type: 'Technology',
				},
				{
					id: 4,
					title: 'Premiere',
					description: 'In depth course on Premiere',
					type: 'Technology',
				},
				{
					id: 5,
					title: 'Typography',
					description: 'In depth course on Typography',
					type: 'Course',
				},
			],
		},
	],
	learningProcesses: [
		{
			id: 1,
			title: 'Digital Design',
			description: 'Learning in depth digital design',
			learningEnvironmentsIds: [1],
			isOrdeded: true,
		},
	],
};

export default mockDataLearningManager;

// export type LearningProcess = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	learningEnvironments: LearningEnvironment[];
// 	isOrdeded: boolean;
// };
