'use client';

import { RecurrenceDay, Task, WeeklyRecurrence } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
	formData: Task & { recurrence: { type: 'weekly'; days: WeeklyRecurrence[] } };
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const Weekly = ({ formData, setFormData }: Props) => {
	const [currentDay, setCurrentDay] = useState<RecurrenceDay>('Sunday');
	const [currentTime, setCurrentTime] = useState<string>('00:00');

	useEffect(() => {
		setFormData({
			...formData,
			recurrence: {
				type: 'weekly',
				days: [],
			},
		});
	}, []);

	const handleAddDayClick = () => {
		const newDay = {
			dayOfWeek: currentDay,
			time: currentTime,
		} as WeeklyRecurrence;

		if (!formData.recurrence) {
			setFormData({
				...formData,
				recurrence: {
					type: 'weekly',
					days: [newDay],
				},
			});
			return;
		}

		const allDays = [...formData.recurrence.days, newDay];

		setFormData({
			...formData,
			recurrence: {
				...formData.recurrence,
				days: allDays,
			},
		});
	};
	return (
		<div>
			<p>Weekly</p>
			<p>Add new day:</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '1rem',
				}}
			>
				<label>
					Day of the week:{' '}
					<select
						name='dayOfWeek'
						value={currentDay}
						onChange={(e) => setCurrentDay(e.target.value as RecurrenceDay)}
					>
						<option value='Sunday'>Sunday</option>
						<option value='Monday'>Monday</option>
						<option value='Tuesday'>Tuesday</option>
						<option value='Wednesday'>Wednesday</option>
						<option value='Thursday'>Thursday</option>
						<option value='Friday'>Friday</option>
						<option value='Saturday'>Saturday</option>
					</select>
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
					{formData.recurrence?.days?.map((day, index) => {
						const { dayOfWeek, time } = day;
						return (
							<tr key={index}>
								<td>{dayOfWeek}</td>
								<td>{time}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Weekly;
