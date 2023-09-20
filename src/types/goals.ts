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
	relatedVisionsIds: number[];
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
