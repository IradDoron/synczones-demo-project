import { STATUS_COLORS } from '@/constants';
import mockDataGoals from '@/data/mockDataGoals';
import mockDataTasks from '@/data/mockDataTasks';
import { Goal } from '@/types';
import {
	getAllTasksIdsFromGoalId,
	getCommaSeparatedStringsFromArray,
	getItemById,
	getTasksDataFromTasksIds,
} from '@/utils';

type Props = {
	goalId: number;
};

const GoalTasksDisplay = ({ goalId }: Props) => {
	const tasksIds = getAllTasksIdsFromGoalId(mockDataGoals, goalId);
	const tasksData = getTasksDataFromTasksIds(mockDataTasks, tasksIds);
	const goal = getItemById(mockDataGoals, goalId) as Goal;

	const { tasks } = goal;

	if (!tasks) {
		return <div></div>;
	}

	return (
		<div>
			{tasksData.map((task, index) => {
				const { id, title, description, relatedGoalsIds, taskSteps, status } =
					task;

				return (
					<div key={id}>
						<table>
							<caption
								style={{
									textAlign: 'left',
									fontSize: '1.5rem',
									fontWeight: 'bold',
									padding: '1rem',
									backgroundColor: STATUS_COLORS[status],
								}}
							>{`${index + 1}. ${title}`}</caption>
							<thead>
								<tr>
									<th>ID</th>
									<th>Description</th>
									<th>Related Goals IDs</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{id}</td>
									<td>{description}</td>
									<td>{getCommaSeparatedStringsFromArray(relatedGoalsIds)}</td>
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
						<br />
						<table>
							<caption
								style={{
									textAlign: 'left',
									fontSize: '1.5rem',
									padding: '1rem',
								}}
							>
								Task Steps
							</caption>
							<thead>
								<tr>
									<th>ID</th>
									<th>Title</th>
									<th>Description</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{taskSteps?.map((taskStep) => {
									const { id, title, description, status } = taskStep;
									return (
										<tr key={id}>
											<td>{id}</td>
											<td>{title}</td>
											<td>{description}</td>
											<td
												style={{
													backgroundColor: STATUS_COLORS[status],
												}}
											>
												{status}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<br />
						<br />
						<br />
					</div>
				);
			})}
		</div>
	);
};

export default GoalTasksDisplay;

// export type TaskStep = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	status: 'Completed' | 'In Progress' | 'Not Started';
// };

// export type Task = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	relatedGoalsIds: number[];
// 	taskSteps?: TaskStep[];
// 	status: 'Completed' | 'In Progress' | 'Not Started';
// };
