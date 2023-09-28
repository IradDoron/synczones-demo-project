'use client';

import { Task } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const Daily = ({ formData, setFormData }: Props) => {
	const [recurrenceDaily, setRecurrenceDaily] = useState<{
		interval: number;
		time: string;
	}>({ interval: 1, time: '00:00' });

	useEffect(() => {
		setFormData({
			...formData,
			recurrence: {
				type: 'daily',
				interval: recurrenceDaily.interval,
				time: recurrenceDaily.time,
			},
		});
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRecurrenceDaily({
			...recurrenceDaily,
			[e.target.name]: e.target.value,
		});
		setFormData({
			...formData,
			recurrence: {
				type: 'daily',
				interval: recurrenceDaily.interval,
				time: recurrenceDaily.time,
			},
		});
	};

	return (
		<div>
			<p>Daily</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<label>
					Interval:{' '}
					<input
						type='number'
						name='interval'
						value={recurrenceDaily.interval}
						onChange={handleChange}
					/>
				</label>
				<label>
					Time:{' '}
					<input
						type='time'
						name='time'
						value={recurrenceDaily.time}
						onChange={handleChange}
					/>
				</label>
			</div>
		</div>
	);
};

export default Daily;
