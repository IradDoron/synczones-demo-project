export type SkillLevel =
	| 'Not Started'
	| 'Beginner'
	| 'Intermediate'
	| 'Advanced'
	| 'Expert';

export type SkillCategory = string;

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
	isInProgress: boolean;
	relatedSkills: Skill[];
	category: SkillCategory;
	tags: SkillTag[];
	dependencies: Skill[];
	lastTimePracticed: Date;
	totalMinutesPracticed: number;
	practiceSections: SkillPracticeSection[];
};
