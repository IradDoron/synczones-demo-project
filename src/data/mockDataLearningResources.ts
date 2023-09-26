import { LearningResource } from '@/types';

const mockDataLearningResources: LearningResource[] = [
	{
		id: 1,
		title: 'In-depth Build & Deploy DevOverflow App',
		description:
			'Master the building of Next13 apps in an active way & achieve a deep understanding of the web.',
		resourceURL:
			'https://courses.jsmastery.pro/course/ultimate-next-js-13-course',
		author: 'JS Mastery',
		platform: 'JS Mastery',
		platformURL: 'https://www.jsmastery.pro/',
		cost: 1275,
		currency: 'ILS',
		type: 'Course',
		mark: {
			markType: 'Chapter',
			currentMark: 'Intro',
			totalMark: null,
			lastTimeMarked: new Date('Mon Sep 25 2023 21:12:42 GMT+0300'),
		},
		status: 'Not Started',
		relatedSkillsIds: [10],
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