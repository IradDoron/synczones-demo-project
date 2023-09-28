'use client';

import { Task, TaskStep } from '@/types';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const TaskStepsInput = ({ formData, setFormData }: Props) => {
	const [currentTaskStep, setCurrentTaskStep] = useState<TaskStep>({
		id: 1,
		title: '',
		description: '',
		status: 'Not Started',
	});
	const handleCurrentTaskStepChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setCurrentTaskStep({
			...currentTaskStep,
			[name]: value,
		});
	};

	const handleUpdateTaskStepClick = () => {
		if (!formData.taskSteps) {
			setFormData({
				...formData,
				taskSteps: [currentTaskStep],
			});
			return;
		}
		const allSteps = [...formData.taskSteps, currentTaskStep];

		setFormData({
			...formData,
			taskSteps: allSteps,
		});

		setCurrentTaskStep({
			id: currentTaskStep.id + 1,
			title: '',
			description: '',
			status: 'Not Started',
		});
	};
	return (
		<section>
			<h3 className='hidden'>Task Steps</h3>
			<details>
				<summary>Task Steps</summary>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{formData.taskSteps?.map((step) => {
							const { id, title, description, status } = step;
							return (
								<tr key={id}>
									<td>{id}</td>
									<td>{title}</td>
									<td>{description}</td>
									<td>{status}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<p>Add new task step:</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						marginBottom: '1rem',
					}}
				>
					<label>
						Title:{' '}
						<input
							type='text'
							name='title'
							onChange={handleCurrentTaskStepChange}
							value={currentTaskStep.title}
						/>
					</label>
					<label>
						Description:{' '}
						<input
							name='description'
							onChange={handleCurrentTaskStepChange}
							value={currentTaskStep.description}
						/>
					</label>
					<label>
						Status:{' '}
						<select
							name='status'
							onChange={handleCurrentTaskStepChange}
							value={currentTaskStep.status}
						>
							<option value='Not Started'>Not Started</option>
							<option value='In Progress'>In Progress</option>
							<option value='Completed'>Completed</option>
						</select>
					</label>
				</div>
				<button onClick={handleUpdateTaskStepClick}>Add Task Step</button>
			</details>
		</section>
	);
};

export default TaskStepsInput;
