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
	mark: {
		markType: 'Page' | 'Time' | 'Lesson Number' | 'URL' | null;
		currentMark: number | Date | string | null;
		totalMark: number | Date | string | null;
		lastTimeMarked: Date | null;
	};
	subLearningResources?: LearningResource[];
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
