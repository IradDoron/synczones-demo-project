export type LearningEnvironment = {
	id: number;
	title: string;
	description: string;
	type:
		| 'Course'
		| 'Book'
		| 'Video'
		| 'Article'
		| 'Podcast'
		| 'Private Lesson'
		| 'Technology'
		| 'Other';
	subLearningEnvironments?: LearningEnvironment[];
};

export type LearningProcess = {
	id: number;
	title: string;
	description: string;
	learningEnvironmentsIds: number[];
	isOrdeded: boolean;
};
