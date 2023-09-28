'use client';

import {
	Task,
	TaskRecurrenceType,
	WeeklyRecurrence,
	YearlyRecurrence,
} from '@/types';
import { useEffect, useState } from 'react';
import Daily from './Daily';
import Monthly from './Monthly';
import Weekly from './Weekly';
import Yearly from './Yearly';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const RecurrenceInput = ({ formData, setFormData }: Props) => {
	const [recurrenceType, setRecurrenceType] =
		useState<TaskRecurrenceType>('none');

	const handleRecurrenceTypeChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const value = e.target.value as TaskRecurrenceType;
		setRecurrenceType(value);
	};

	return (
		<section>
			<h3 className='hidden'>Recurrence</h3>
			<details>
				<summary>Recurrence</summary>
				<select
					name='recurrenceType'
					value={recurrenceType}
					onChange={handleRecurrenceTypeChange}
				>
					<option value='none'>None</option>
					<option value='daily'>Daily</option>
					<option value='weekly'>Weekly</option>
					<option value='monthly'>Monthly</option>
					<option value='yearly'>Yearly</option>
				</select>

				{(() => {
					switch (recurrenceType) {
						case 'none': {
							return <p>None</p>;
						}
						case 'daily': {
							return <Daily formData={formData} setFormData={setFormData} />;
						}
						case 'weekly': {
							return (
								<Weekly
									formData={
										formData as Task & {
											recurrence: { type: 'weekly'; days: WeeklyRecurrence[] };
										}
									}
									setFormData={setFormData}
								/>
							);
						}
						case 'monthly': {
							return (
								<Monthly
									formData={
										formData as Task & {
											recurrence: {
												type: 'monthly';
												daysOfMonth: WeeklyRecurrence[];
											};
										}
									}
									setFormData={setFormData}
								/>
							);
						}
						case 'yearly': {
							return (
								<Yearly
									formData={
										formData as Task & {
											recurrence: {
												type: 'yearly';
												months: YearlyRecurrence[];
											};
										}
									}
									setFormData={setFormData}
								/>
							);
						}
						default: {
							return <p>None</p>;
						}
					}
				})()}
			</details>
		</section>
	);
};

export default RecurrenceInput;

// export type RecurrenceMonth =
// 	| 'January'
// 	| 'February'
// 	| 'March'
// 	| 'April'
// 	| 'May'
// 	| 'June'
// 	| 'July'
// 	| 'August'
// 	| 'September'
// 	| 'October'
// 	| 'November'
// 	| 'December';

// export type RecurrenceDay =
// 	| 'Sunday'
// 	| 'Monday'
// 	| 'Tuesday'
// 	| 'Wednesday'
// 	| 'Thursday'
// 	| 'Friday'
// 	| 'Saturday';

// export type WeeklyRecurrence = {
// 	dayOfWeek: RecurrenceDay;
// 	time: string;
// };

// export type MonthlyRecurrence = {
// 	dayOfMonth: number;
// 	time: string;
// };

// export type YearlyRecurrence = {
// 	month: RecurrenceMonth;
// 	dayOfMonth: number;
// 	time: string;
// };

// export type TaskRecurrence =
// 	| { type: 'none' }
// 	| { type: 'daily'; interval: number; time: string }
// 	| { type: 'weekly'; days: WeeklyRecurrence[] }
// 	| { type: 'monthly'; daysOfMonth: MonthlyRecurrence[] }
// 	| { type: 'yearly'; months: YearlyRecurrence[] };
