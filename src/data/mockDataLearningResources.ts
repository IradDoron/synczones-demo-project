import { LearningResource } from '@/types';

const mockDataLearningResources: LearningResource[] = [
	{
		id: 1,
		title: 'In-depth Build & Deploy DevOverflow App',
		description:
			'Master the building of Next13 apps in an active way & achieve a deep understanding of the web.',
		resourceURL: 'https://www.jsmastery.pro/ultimate-next13-course',
		author: 'JS Mastery',
		platform: 'JS Mastery',
		platformURL: 'https://www.jsmastery.pro/',
		cost: 1275,
		currency: 'ILS',
		type: 'Course',
		mark: {
			markType: null,
			currentMark: null,
			totalMark: null,
			lastTimeMarked: null,
		},
		status: 'Not Started',
	},
];

export default mockDataLearningResources;

// export type LearningResource = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	resourceURL: string;
// 	author: string;
// 	platform: string;
// 	platformURL: string;
// 	cost: number;
// 	currency: 'USD' | 'EUR' | 'ILS';
// 	type:
// 		| 'Course'
// 		| 'Module'
// 		| 'Book'
// 		| 'Video'
// 		| 'Article'
// 		| 'Podcast'
// 		| 'Private Lesson'
// 		| 'Technology'
// 		| 'Other';
// 	mark: {
// 		markType: 'Page' | 'Time' | 'Lesson Number' | 'URL';
// 		currentMark: number | Date | string;
// 		totalMark: number | Date | string;
// 		lastTimeMarked: Date;
// 	};
// 	subLearningResources?: LearningResource[];
// 	status: 'Not Started' | 'In Progress' | 'Completed';
// 	relatedTasksIds: number[];
// 	relatedSkillsIds?: number[];
// };
