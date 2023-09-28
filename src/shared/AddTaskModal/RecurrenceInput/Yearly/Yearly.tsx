'use client';

import { RecurrenceMonth, Task, YearlyRecurrence } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
	formData: Task & {
		recurrence: { type: 'yearly'; months: YearlyRecurrence[] };
	};
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const Yearly = ({ formData, setFormData }: Props) => {
	const [currentMonth, setCurrentMonth] = useState<RecurrenceMonth>('January');
	const [currentDay, setCurrentDay] = useState<number>(1);
	const [currentTime, setCurrentTime] = useState<string>('00:00');

	useEffect(() => {
		setFormData({
			...formData,
			recurrence: {
				type: 'yearly',
				months: [],
			},
		});
	}, []);

	const handleAddDayClick = () => {
		const newDay = {
			month: currentMonth,
			dayOfMonth: currentDay,
			time: currentTime,
		} as YearlyRecurrence;

		if (!formData.recurrence) {
			setFormData({
				...formData,
				recurrence: {
					type: 'yearly',
					months: [newDay],
				} as { type: 'yearly'; months: YearlyRecurrence[] },
			});
			return;
		}

		const allDays = [...formData.recurrence.months, newDay];

		setFormData({
			...formData,
			recurrence: {
				...formData.recurrence,
				months: allDays,
			},
		});
	};
	return (
		<div>
			<p>Yearly</p>
			<p>Add new day:</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '1rem',
				}}
			>
				<label>
					Month:{' '}
					<select
						name='month'
						value={currentMonth}
						onChange={(e) => setCurrentMonth(e.target.value as RecurrenceMonth)}
					>
						<option value='January'>January</option>
						<option value='February'>February</option>
						<option value='March'>March</option>
						<option value='April'>April</option>
						<option value='May'>May</option>
						<option value='June'>June</option>
						<option value='July'>July</option>
						<option value='August'>August</option>
						<option value='September'>September</option>
						<option value='October'>October</option>
						<option value='November'>November</option>
						<option value='December'>December</option>
					</select>
				</label>
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
						<th>Month</th>
						<th>Day</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{formData.recurrence?.months?.map((day, index) => {
						const { month, dayOfMonth, time } = day;
						return (
							<tr key={index}>
								<td>{month}</td>
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

export default Yearly;
