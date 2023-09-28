'use client';

import mockDataTasks from '@/data/mockDataTasks';
import { Task, TaskStep } from '@/types';
import { useEffect, useState } from 'react';
import AttachmentsInput from './AttachmentsInput';
import DependenciesInput from './DependenciesInput';
import DescriptionInput from './DescriptionInput';
import DueDateInput from './DueDateInput';
import EstimatedHoursInput from './EstimatedHoursInput';
import LabelsInput from './LabelsInput';
import LearningResourceIdInput from './LearningResourceIdInput';
import NotesInput from './NotesInput';
import PriorityInput from './PriorityInput';
import ProgressInput from './ProgressInput';
import RecurrenceInput from './RecurrenceInput';
import RelatedGoalsIdsInput from './RelatedGoalsIdsInput';
import StartDateInput from './StartDateInput';
import StatusInput from './StatusInput';
import SubTasksIdsInput from './SubTasksIdsInput';
import TaskStepsInput from './TaskStepsInput';
import TaskTypeInput from './TaskTypeInput';
import TitleInput from './TitleInput';
import WorkSessionsInput from './WorkSessionsInput';

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTaskModal = ({ isOpen, setIsOpen }: Props) => {
	const [formData, setFormData] = useState<Task>({
		id: mockDataTasks.length + 1,
		title: '',
		url: '',
		taskType: 'General',
		description: '',
		taskSteps: [],
		status: 'Not Started',
		learningResourceId: 0,
		relatedGoalsIds: [],
		subTasksIds: [],
		attachments: [],
		labels: [],
		createDate: `new Date(${new Date()}) `,
		startDate: `new Date(${new Date()}) `,
		completedDate: null,
		dueDate: null,
		recurrence: { type: 'none' },
		dependencies: [],
		estimatedHours: 0,
		priority: 'Moderate',
		notes: '',
		progress: 0,
		workSessions: [],
	});

	useEffect(() => {
		const title = formData.title;
		if (title === '') {
			setFormData({
				...formData,
				url: '',
			});
			return;
		}
		let url = `${title.toLowerCase().replace(/\s/g, '-')}--${formData.id}`;
		setFormData({
			...formData,
			url,
		});
	}, [formData.title]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const formatFormData = () => {
		const formattedJson = JSON.stringify(formData, null, 2);
		return formattedJson;
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(formatFormData());
		setIsOpen(false);
	};

	if (!isOpen) return null;

	return (
		<div
			style={{
				position: 'fixed',
				width: '100dvw',
				height: '100dvh',
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.75)',
				overflow: 'scroll',
			}}
		>
			<div
				style={{
					backgroundColor: 'white',
					position: 'relative',
					padding: '3rem 8rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-start',
					flexDirection: 'column',
					width: 'fit-content',
					margin: 'auto',
				}}
			>
				<h2>Add Task Modal</h2>
				<form onSubmit={handleSubmit}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<TitleInput formData={formData} handleChange={handleChange} />
						<DescriptionInput formData={formData} handleChange={handleChange} />

						<StatusInput formData={formData} handleChange={handleChange} />
						<TaskTypeInput formData={formData} handleChange={handleChange} />
						<TaskStepsInput formData={formData} setFormData={setFormData} />
						<LearningResourceIdInput
							formData={formData}
							handleChange={handleChange}
						/>
						<RelatedGoalsIdsInput
							formData={formData}
							setFormData={setFormData}
						/>
						<SubTasksIdsInput formData={formData} setFormData={setFormData} />
						<AttachmentsInput formData={formData} setFormData={setFormData} />
						<LabelsInput formData={formData} setFormData={setFormData} />
						<StartDateInput formData={formData} setFormData={setFormData} />
						<DueDateInput formData={formData} setFormData={setFormData} />
						<RecurrenceInput formData={formData} setFormData={setFormData} />
						<DependenciesInput formData={formData} setFormData={setFormData} />
						<EstimatedHoursInput
							formData={formData}
							setFormData={setFormData}
						/>
						<PriorityInput formData={formData} setFormData={setFormData} />
						<NotesInput formData={formData} setFormData={setFormData} />
						<ProgressInput formData={formData} setFormData={setFormData} />
						<WorkSessionsInput formData={formData} setFormData={setFormData} />
					</div>
				</form>
				<pre
					style={{
						fontSize: '1.25rem',
					}}
				>
					{JSON.stringify(formData, null, 2)}
				</pre>
				<button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
				<button
					onClick={() => setIsOpen(false)}
					style={{
						position: 'absolute',
						top: '1rem',
						right: '1rem',
					}}
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default AddTaskModal;
