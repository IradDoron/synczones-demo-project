export type SkillLevel =
	| 'Not Started'
	| 'Beginner'
	| 'Intermediate'
	| 'Advanced'
	| 'Expert';

export type SkillCategory = {
	id: number;
	title: string;
	description: string;
	skillsIds: number[];
};

export type SkillTag = string;

export type SkillPracticeSection = {
	id: number;
	title: string;
	description: string;
	totalMinutesPracticed: number;
	startingDate: Date;
	endingDate: Date;
};

export type Skill = {
	id: number;
	title: string;
	description: string;
	level: SkillLevel;
	inProgress: boolean;
	relatedSkillsIds: number[];
	categoriesIds: number[];
	tags: SkillTag[];
	dependencies: number[];
};
