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
