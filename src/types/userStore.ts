import {
	CareerInterest,
	Goal,
	Interest,
	LearningEnvironment,
	LearningProcess,
	Talent,
	Vision,
	WorkingAttribute,
} from '@/types';

/**
 * Represents a Career Manager store that contains the list of visions and goals.
 */
export type UserCareerManagerStore = {
	interests: Interest[];
	talents: Talent[];
	workngAttributes: WorkingAttribute[];
	careerInterests: CareerInterest[];
};

/**
 * Represents a Goals Manager store that contains the list of visions and goals.
 */
export type UserGoalsManagerStore = {
	visions: Vision[];
	goals: Goal[];
};

/**
 * Represents a Learning Manager store that contains the list learning environments and processes.
 */
export type UserLearningManagerStore = {
	learningEnvironments: LearningEnvironment[];
	learningProcesses: LearningProcess[];
};
