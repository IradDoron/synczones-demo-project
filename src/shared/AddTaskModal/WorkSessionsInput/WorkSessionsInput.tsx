'use client';

import { Break, Task, WorkSession } from '@/types';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const WorkSessionsInput = ({ formData, setFormData }: Props) => {
	const [currentWorkSession, setCurrentWorkSession] = useState<WorkSession>({
		id: (formData.workSessions?.length || 0) + 1,
		taskId: formData.id,
		startTime: new Date(),
		endTime: null,
		duration: null,
		mood: null,
		productivityRating: null,
		notes: '',
		breaks: [],
	});

	const [currentBreak, setCurrentBreak] = useState<Break>({
		startTime: new Date(),
		endTime: null,
		duration: null,
		reason: '',
		activity: '',
	});

	const handleWorkSessionChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		if (name === 'duration') {
			setCurrentWorkSession({
				...currentWorkSession,
				duration: parseInt(value),
			});
			return;
		}

		setCurrentWorkSession({
			...currentWorkSession,
			[name]: value,
		});
	};

	const handleBreakChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		if (name === 'duration') {
			setCurrentBreak({
				...currentBreak,
				duration: parseInt(value),
			});
			return;
		}

		setCurrentBreak({
			...currentBreak,
			[name]: value,
		});
	};

	const handleAddBreakClick = () => {
		if (!currentWorkSession.breaks) {
			setCurrentWorkSession({
				...currentWorkSession,
				breaks: [currentBreak],
			});
			return;
		}
		const allBreaks = [...currentWorkSession.breaks, currentBreak];

		setCurrentWorkSession({
			...currentWorkSession,
			breaks: allBreaks,
		});

		setCurrentBreak({
			startTime: new Date(),
			endTime: null,
			duration: null,
			reason: '',
			activity: '',
		});
	};

	const handleAddWorkSessionClick = () => {
		if (!formData.workSessions) {
			setFormData({
				...formData,
				workSessions: [currentWorkSession],
			});
			return;
		}
		const allWorkSessions = [...formData.workSessions, currentWorkSession];

		setFormData({
			...formData,
			workSessions: allWorkSessions,
		});

		setCurrentWorkSession({
			id: (formData.workSessions?.length || 0) + 2,
			taskId: formData.id,
			startTime: new Date(),
			endTime: null,
			duration: null,
			mood: null,
			productivityRating: null,
			notes: '',
			breaks: [],
		});
	};

	return (
		<section>
			<h3 className='hidden'>Work Sessions</h3>
			<details>
				<summary>Work Sessions</summary>
				<p>Current work session: </p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						margin: '1rem 0',
					}}
				>
					<label>
						Start Time:{' '}
						<input
							type='datetime-local'
							name='startTime'
							value={currentWorkSession.startTime.toString()}
							onChange={handleWorkSessionChange}
						/>
					</label>
					<label>
						End Time:{' '}
						<input
							type='datetime-local'
							name='endTime'
							value={currentWorkSession.endTime?.toString()}
							onChange={handleWorkSessionChange}
						/>
					</label>
					<label>
						Duration:{' '}
						<input
							type='number'
							name='duration'
							value={currentWorkSession.duration || 0}
							onChange={handleWorkSessionChange}
						/>
					</label>
					<label>
						Mood:{' '}
						<select
							name='mood'
							value={currentWorkSession.mood || ''}
							onChange={handleWorkSessionChange}
						>
							<option value='Very Happy'>Very Happy</option>
							<option value='Happy'>Happy</option>
							<option value='Neutral'>Neutral</option>
							<option value='Unhappy'>Unhappy</option>
							<option value='Very Unhappy'>Very Unhappy</option>
						</select>
					</label>
					<label>
						Productivity Rating:{' '}
						<select
							name='productivityRating'
							value={currentWorkSession.productivityRating || ''}
							onChange={handleWorkSessionChange}
						>
							<option value='Very Low'>Very Low</option>
							<option value='Low'>Low</option>
							<option value='Medium'>Medium</option>
							<option value='High'>High</option>
							<option value='Very High'>Very High</option>
						</select>
					</label>
					<label>
						Notes:{' '}
						<textarea
							name='notes'
							value={currentWorkSession.notes || ''}
							onChange={handleWorkSessionChange}
						/>
					</label>
				</div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Task ID</th>
							<th>Start Time</th>
							<th>End Time</th>
							<th>Duration</th>
							<th>Mood</th>
							<th>Productivity Rating</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{currentWorkSession.id}</td>
							<td>{currentWorkSession.taskId}</td>
							<td>{currentWorkSession.startTime.toString()}</td>
							<td>{currentWorkSession.endTime?.toString()}</td>
							<td>{currentWorkSession.duration}</td>
							<td>{currentWorkSession.mood}</td>
							<td>{currentWorkSession.productivityRating}</td>
							<td>{currentWorkSession.notes}</td>
						</tr>
					</tbody>
				</table>
				<p>Add break: </p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						margin: '1rem 0',
					}}
				>
					<label>
						Start Time:{' '}
						<input
							type='datetime-local'
							name='startTime'
							value={currentBreak.startTime?.toString()}
							onChange={handleBreakChange}
						/>
					</label>
					<label>
						End Time:{' '}
						<input
							type='datetime-local'
							name='endTime'
							value={currentBreak.endTime?.toString()}
							onChange={handleBreakChange}
						/>
					</label>
					<label>
						Duration:{' '}
						<input
							type='number'
							name='duration'
							value={currentBreak.duration || 0}
							onChange={handleBreakChange}
						/>
					</label>
					<label>
						Reason:{' '}
						<input
							type='text'
							name='reason'
							value={currentBreak.reason || ''}
							onChange={handleBreakChange}
						/>
					</label>
					<label>
						Activity:{' '}
						<input
							type='text'
							name='activity'
							value={currentBreak.activity || ''}
							onChange={handleBreakChange}
						/>
					</label>
				</div>
				<table>
					<thead>
						<tr>
							<th>Start Time</th>
							<th>End Time</th>
							<th>Duration</th>
							<th>Reason</th>
							<th>Activity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{currentBreak.startTime?.toString()}</td>
							<td>{currentBreak.endTime?.toString()}</td>
							<td>{currentBreak.duration}</td>
							<td>{currentBreak.reason}</td>
							<td>{currentBreak.activity}</td>
						</tr>
					</tbody>
				</table>
				<button
					onClick={handleAddBreakClick}
					style={{
						margin: '1rem 0',
					}}
				>
					Add Break
				</button>
				<p>All breaks: </p>
				<table>
					<thead>
						<tr>
							<th>Start Time</th>
							<th>End Time</th>
							<th>Duration</th>
							<th>Reason</th>
							<th>Activity</th>
						</tr>
					</thead>
					<tbody>
						{currentWorkSession.breaks?.map((breakItem, index) => {
							return (
								<tr key={index}>
									<td>{breakItem.startTime?.toString()}</td>
									<td>{breakItem.endTime?.toString()}</td>
									<td>{breakItem.duration}</td>
									<td>{breakItem.reason}</td>
									<td>{breakItem.activity}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<button
					onClick={handleAddWorkSessionClick}
					style={{
						margin: '1rem 0',
					}}
				>
					Add Work Session
				</button>
				<p>All work sessions: </p>
				{formData.workSessions?.map((session, index) => {
					const {
						id,
						taskId,
						startTime,
						endTime,
						duration,
						mood,
						productivityRating,
						notes,
						breaks,
					} = session;
					return (
						<div>
							<p>Work Session {index + 1}</p>
							<table>
								<thead>
									<tr>
										<th>ID</th>
										<th>Task ID</th>
										<th>Start Time</th>
										<th>End Time</th>
										<th>Duration</th>
										<th>Mood</th>
										<th>Productivity Rating</th>
										<th>Notes</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{id}</td>
										<td>{taskId}</td>
										<td>{startTime.toString()}</td>
										<td>{endTime?.toString()}</td>
										<td>{duration}</td>
										<td>{mood}</td>
										<td>{productivityRating}</td>
										<td>{notes}</td>
									</tr>
								</tbody>
							</table>
							{breaks && breaks.length > 0 && (
								<div>
									<p>Breaks: </p>
									<table>
										<thead>
											<tr>
												<th>Start Time</th>
												<th>End Time</th>
												<th>Duration</th>
												<th>Reason</th>
												<th>Activity</th>
											</tr>
										</thead>
										<tbody>
											{breaks?.map((breakItem, index) => {
												return (
													<tr key={index}>
														<td>{breakItem.startTime?.toString()}</td>
														<td>{breakItem.endTime?.toString()}</td>
														<td>{breakItem.duration}</td>
														<td>{breakItem.reason}</td>
														<td>{breakItem.activity}</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							)}
						</div>
					);
				})}
			</details>
		</section>
	);
};

export default WorkSessionsInput;
