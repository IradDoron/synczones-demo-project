'use client';

import { STATUS_COLORS } from '@/constants';
import mockDataGoals from '@/data/mockDataGoals';
import AddTaskModal from '@/shared/AddTaskModal';
import GoalProcessDisplay from '@/shared/GoalProcessDisplay';
import GoalTasksDisplay from '@/shared/GoalTasksDisplay';
import { Goal } from '@/types';
import {
	getCommaSeparatedStringsFromArray,
	getGoalFromGoalId,
	getGoalIdFromGoalUrl,
} from '@/utils';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const GoalPage = () => {
	const { goal } = useParams() as { goal: string };
	const goalId = getGoalIdFromGoalUrl(mockDataGoals, goal);
	const goalData = getGoalFromGoalId(mockDataGoals, goalId);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	if (!goalData) {
		return (
			<div>
				<h1>Goal Page</h1>
				<p>Goal not found</p>
			</div>
		);
	}

	const { id, relatedVisionsIds, title, url, description, status } =
		goalData as Goal;

	const { process } = goalData as Goal;

	const handleAddTask = () => {
		setIsTaskModalOpen(true);
	};

	return (
		<div>
			<h1>Goal Page</h1>

			<div>
				<table>
					<caption
						style={{
							backgroundColor: STATUS_COLORS[status],
						}}
					>
						<h2>{title}</h2>
					</caption>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>URL</th>
							<th>Related Visions IDs</th>
							<th>Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{id}</td>
							<td>{title}</td>
							<td>{url}</td>
							<td>{getCommaSeparatedStringsFromArray(relatedVisionsIds)}</td>
							<td>{description}</td>
							<td
								style={{
									backgroundColor: STATUS_COLORS[status],
								}}
							>
								{status}
							</td>
						</tr>
					</tbody>
				</table>
				<h3>What should I do to achieve this goal?</h3>
				<GoalProcessDisplay goalProcess={process} />
				<h3>What tasks should I do?</h3>
				<button onClick={handleAddTask}>Add Task</button>
				<GoalTasksDisplay goalId={id} />
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			<AddTaskModal
				isOpen={isTaskModalOpen}
				setIsOpen={setIsTaskModalOpen}
				info={{ goalId: id }}
			/>
		</div>
	);
};

export default GoalPage;
