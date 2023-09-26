export type LearningResourceMark = {
	markType: 'Page' | 'Time' | 'Lesson Number' | 'URL' | 'Chapter' | 'Unkown';

	currentMark: number | string | null;
	totalMark: number | string | null;
	lastTimeMarked: Date | null | string;
};

export type LearningResource = {
	id: number;
	title: string;
	description: string;
	resourceURL: string;
	author: string;
	platform: string;
	platformURL: string;
	cost: number;
	currency: 'USD' | 'EUR' | 'ILS';
	type:
		| 'Course'
		| 'Module'
		| 'Book'
		| 'Video'
		| 'Article'
		| 'Podcast'
		| 'Private Lesson'
		| 'Technology'
		| 'Other';
	mark: LearningResourceMark;
	subLearningResources?: number[];
	status: 'Not Started' | 'In Progress' | 'Completed';
	relatedTasksIds?: number[];
	relatedSkillsIds?: number[];
};

export type LearningProcess = {
	id: number;
	title: string;
	description: string;
	learningResourcesIds: number[];
	isOrdeded: boolean;
};
