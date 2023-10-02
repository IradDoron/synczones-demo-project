import { Locale } from '@/i18n.config';

export * from './career';
export * from './goals';
export * from './learning';
export * from './skills';
export * from './userStore';

export type LangParam = {
	params: { lang: Locale };
};

export type Managers =
	| 'career-manager'
	| 'collaboration-manager'
	| 'finance-manager'
	| 'goals-manager'
	| 'health-manager'
	| 'hobbies-manager'
	| 'learning-manager'
	| 'organization-manager'
	| 'projects-manager'
	| 'relationships-manager'
	| 'routines-manager'
	| 'skills-manager'
	| 'tasks-manager'
	| 'time-manager';
