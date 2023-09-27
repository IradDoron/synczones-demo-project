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

export type GoalProcessParagraph = {
	element: 'paragraph';
	content: string;
};

export type GoalProcess = {
	sections: GoalProcessParagraph[];
};

export type GoalProcessElement = GoalProcessParagraph;

/**
 * Represents a Goal in the Goals Manager app.
 */
export type Goal = {
	id: number;
	relatedVisionsIds: number[];
	title: string;
	url: string;
	description: string;
	status: 'Completed' | 'In Progress' | 'Not Started';
	process?: GoalProcess;
	tasks?: number[]; // Task ids
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

export type VisionComponent = {
	id: number;
	title: string;
	description: string;
	relatedVisionsIds: number[];
};

/**
 * The steps for achieving a vision.
 * Each step is an array of goal ids.
 * The first step is the final set of goals to be achieved.
 * The last step is the initial set of goals to be achieved.
 */
export type VisionComponentLadder = {
	id: number;
	visionComponentId: number;
	steps: VisionLadderStep[];
};

export type VisionLadderStep = {
	title: string;
	description: string;
	goalIds: number[];
};

export type TaskStep = {
	id: number;
	title: string;
	description: string;
	status: 'Completed' | 'In Progress' | 'Not Started';
};

export type RecurrenceMonth =
	| 'January'
	| 'February'
	| 'March'
	| 'April'
	| 'May'
	| 'June'
	| 'July'
	| 'August'
	| 'September'
	| 'October'
	| 'November'
	| 'December';

export type RecurrenceDay =
	| 'Sunday'
	| 'Monday'
	| 'Tuesday'
	| 'Wednesday'
	| 'Thursday'
	| 'Friday'
	| 'Saturday';

export type WeeklyRecurrence = {
	dayOfWeek: RecurrenceDay;
	time: string;
};

export type MonthlyRecurrence = {
	dayOfMonth: number;
	time: string;
};

export type YearlyRecurrence = {
	month: RecurrenceMonth;
	dayOfMonth: number;
	time: string;
};

export type TaskRecurrence =
	| { type: 'none' }
	| { type: 'daily'; interval: number; time: string }
	| { type: 'weekly'; days: WeeklyRecurrence[] }
	| { type: 'monthly'; daysOfMonth: MonthlyRecurrence[] }
	| { type: 'yearly'; months: YearlyRecurrence[] };

export type TaskPriority =
	| 'Highest'
	| 'Very High'
	| 'High'
	| 'Moderate High'
	| 'Moderate'
	| 'Moderate Low'
	| 'Low'
	| 'Very Low'
	| 'Lowest';

/**
 * Represents a break taken during a work session.
 * @property {Date} startTime - Start time of the break.
 * @property {Date} endTime - End time of the break.
 * @property {number} duration - Duration of the break in seconds.
 * @property {string} [reason] - Reason for taking the break (optional).
 * @property {string} [activity] - Description of what the user did during the break (optional).
 */
export type Break = {
	startTime: Date;
	endTime: Date;
	duration: number;
	reason?: string;
	activity?: string;
};

/**
 * Represents a work session including breaks and user feedback.
 *
 * @property {number} id - Unique identifier for the work session.
 * @property {number} taskId - ID of the task this work session is associated with.
 * @property {Date} startTime - Start time of work.
 * @property {Date} endTime - End time of work.
 * @property {number} duration - Duration of work in seconds.
 * @property {'Very Happy' | 'Happy' | 'Neutral' | 'Unhappy' | 'Very Unhappy'} [mood] -
 *   (Optional) User's mood during work.
 * @property {'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High'} [productivityRating] -
 *   (Optional) User's sense of productivity.
 * @property {string} [notes] - (Optional) Additional notes about the work session.
 * @property {Break[]} [breaks] - (Optional) Array of breaks taken during the work session.
 */
export type WorkSession = {
	id: number;
	taskId: number;
	startTime: Date;
	endTime: Date;
	duration: number;
	mood?: 'Very Happy' | 'Happy' | 'Neutral' | 'Unhappy' | 'Very Unhappy';
	productivityRating?: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
	notes?: string;
	breaks?: Break[];
};

/**
 * Represents a task within the task management system.
 *
 * @property {number} id - Unique identifier for the task.
 * @property {string} title - Title of the task.
 * @property {string} url - URL associated with the task.
 * @property {('General' | 'Learning Resource' | 'Goal')} taskType - Type of the task.
 * @property {string} description - Description of the task.
 * @property {TaskStep[]} [taskSteps] - List of steps or sub-tasks for this task.
 * @property {('Completed' | 'In Progress' | 'Not Started')} status - Status of the task.
 * @property {number} [learningResourceId] - Identifier for the associated learning resource.
 * @property {number[]} [relatedGoalsIds] - IDs of related goals for this task.
 * @property {number[]} [subTasksIds] - Sub-tasks IDs associated with this task.
 * @property {string[]} [attachments] - List of attachments (e.g., file paths or URLs).
 * @property {string[]} [labels] - Labels or tags associated with the task.
 * @property {Date} [createDate] - Date when the task was created.
 * @property {Date} [startDate] - Start date for the task.
 * @property {Date} [completedDate] - Date when the task was completed.
 * @property {Date} [dueDate] - Due date for the task.
 * @property {TaskRecurrence} [recurrence] - Recurrence pattern for the task.
 * @property {number[]} [dependencies] - IDs of tasks that this task depends on.
 * @property {number} [estimatedHours] - Estimated hours required to complete the task.
 * @property {TaskPriority} [priority] - Priority of the task.
 * @property {string} [notes] - Additional notes or comments for the task.
 * @property {`${0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100}`} [progress] - Progress of the task as a percentage (0 to 100).
 * @property {WorkSession[]} [workSessions] - Work session entries associated with the task.
 *   Each entry represents a period of work on the task.
 */
export type Task = {
	id: number;
	title: string;
	url: string;
	taskType: 'General' | 'Learning Resource' | 'Goal';
	description: string;
	taskSteps?: TaskStep[];
	status: 'Completed' | 'In Progress' | 'Not Started';
	learningResourceId?: number;
	relatedGoalsIds?: number[];
	subTasksIds?: number[];
	attachments?: string[];
	labels?: string[];
	createDate?: Date;
	startDate?: Date;
	completedDate?: Date;
	dueDate?: Date;
	recurrence?: TaskRecurrence;
	dependencies?: number[];
	estimatedHours?: number;
	priority?: TaskPriority;
	notes?: string;
	progress?: `${0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100}`;
	workSessions?: WorkSession[];
};
