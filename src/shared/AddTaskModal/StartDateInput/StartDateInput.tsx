'use client';

import { Task } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const StartDateInput = ({ formData, setFormData }: Props) => {
	const [currentTime, setCurrentTime] = useState<{
		hours: number;
		minutes: number;
	}>({ hours: 0, minutes: 0 });

	const [currentDate, setCurrentDate] = useState<Date | null>(null);

	useEffect(() => {
		const fullDate = composedDate();
		if (!fullDate) {
			return;
		}
		setFormData({
			...formData,
			startDate: fullDate,
		});
	}, [currentDate, currentTime]);

	const handleCurrentDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentDate(new Date(e.target.value));
	};

	const handleCurrentTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.name, e.target.value);
		setCurrentTime({
			...currentTime,
			[e.target.name]: parseInt(e.target.value),
		});
	};
	const composedDate = () => {
		if (!currentDate) {
			return;
		}
		const composedDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate(),
			currentTime.hours,
			currentTime.minutes
		);
		return composedDate;
	};

	return (
		<section>
			<h3 className='hidden'>Start Date</h3>
			<details>
				<summary>Start Date</summary>
				<input
					type='date'
					name='startDate'
					onChange={handleCurrentDateChange}
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<label>
						<input
							type='number'
							name='hours'
							value={currentTime.hours}
							onChange={handleCurrentTimeChange}
						/>
						<span>Hours</span>
					</label>
					<label>
						<input
							type='number'
							name='minutes'
							value={currentTime.minutes}
							onChange={handleCurrentTimeChange}
						/>
						<span>Minutes</span>
					</label>
				</div>
				<p>Current start date: {composedDate()?.toLocaleString()}</p>
			</details>
		</section>
	);
};

export default StartDateInput;
