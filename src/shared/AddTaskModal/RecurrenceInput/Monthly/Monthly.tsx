'use client';

import { MonthlyRecurrence, RecurrenceDay, Task } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
	formData: Task & {
		recurrence: { type: 'monthly'; daysOfMonth: MonthlyRecurrence[] };
	};
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const Monthly = ({ formData, setFormData }: Props) => {
	const [currentDay, setCurrentDay] = useState<number>(1);
	const [currentTime, setCurrentTime] = useState<string>('00:00');

	useEffect(() => {
		setFormData({
			...formData,
			recurrence: {
				type: 'monthly',
				daysOfMonth: [],
			},
		});
	}, []);

	const handleAddDayClick = () => {
		const newDay = {
			dayOfMonth: currentDay,
			time: currentTime,
		} as MonthlyRecurrence;

		if (!formData.recurrence) {
			setFormData({
				...formData,
				recurrence: {
					type: 'monthly',
					daysOfMonth: [newDay],
				},
			});
			return;
		}

		const allDays = [...formData.recurrence.daysOfMonth, newDay];

		setFormData({
			...formData,
			recurrence: {
				...formData.recurrence,
				daysOfMonth: allDays,
			},
		});
	};
	return (
		<div>
			<p>Monthly</p>
			<p>Add new day:</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '1rem',
				}}
			>
				<label>
					Day of the month:{' '}
					<input
						type='number'
						name='dayOfWeek'
						value={currentDay}
						onChange={(e) => setCurrentDay(parseInt(e.target.value))}
					/>
				</label>
				<label>
					Time:{' '}
					<input
						type='time'
						name='time'
						value={currentTime}
						onChange={(e) => setCurrentTime(e.target.value)}
					/>
				</label>
				<button onClick={handleAddDayClick}>Add Day</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Day</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{formData.recurrence?.daysOfMonth?.map((day, index) => {
						const { dayOfMonth, time } = day;
						return (
							<tr key={index}>
								<td>{dayOfMonth}</td>
								<td>{time}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Monthly;

// export type MonthlyRecurrence = {
// 	dayOfMonth: number;
// 	time: string;
// };
