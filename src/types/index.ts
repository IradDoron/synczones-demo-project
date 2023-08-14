import type {
	UserCareerManagerStore,
	UserGoalsManagerStore,
} from '@/types/userStoreTypes';

/**
 * A "Career Interest" is a term used to express a job or field that you're truly passionate about and want to pursue.
 */

export type CareerInterest = {
	id: number;
	title: string;
	description: string;
};

export type Talent = {
	id: number;
	title: string;
	description: string;
};

export type Interest = {
	id: number;
	title: string;
	description: string;
};

export type WorkingAttribute =
	| 'Working indenpendently'
	| 'Working in a team'
	| 'fast-paced environment'
	| 'slow-paced environment';

// Define export types for the Vision, Long-Term Goal, and Short-Term Goal entities

/**
 * Represents a Vision in the Goals Manager app.
 */
export type Vision = {
	id: number;
	title: string;
	description: string;
	createdAt: Date;
};

/**
 * Represents a Goal in the Goals Manager app.
 */
export type Goal = {
	id: number;
	visionId: number;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	isCompleted: boolean;
};

// Define export types for CRUD operations and actions related to goals and visions

/**
 * Payload for reading an existing Vision.
 */
export type ReadVisionPayload = {
	id: number;
};

/**
 * Payload for creating a new Vision.
 */
export type CreateVisionPayload = {
	title: string;
	description: string;
};

/**
 * Payload for updating an existing Vision.
 */
export type UpdateVisionPayload = {
	id: number;
	title: string;
	description: string;
};

/**
 * Payload for deleting an existing Vision.
 */
export type DeleteVisionPayload = {
	id: number;
};

/**
 * Payload for reading an existing Goal.
 */
export type ReadGoalPayload = {
	id: number;
};

/**
 * Payload for creating a new Goal.
 */
export type CreateGoalPayload = {
	visionId: number;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
};

/**
 * Payload for updating an existing Goal.
 */
export type UpdateGoalPayload = {
	id: number;
	visionId: number;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	isCompleted: boolean;
};

/**
 * Payload for deleting an existing Goal.
 */
export type DeleteGoalPayload = {
	id: number;
};

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
		| 'Other';
	subLearningEnvironments: LearningEnvironment[];
};

export type LearningProcess = {
	id: number;
	title: string;
	description: string;
	learningEnvironments: LearningEnvironment[];
	isOrdeded: boolean;
};

export { UserCareerManagerStore, UserGoalsManagerStore };
