import { STATUS_COLORS } from '@/constants';
import mockDataGoals from '@/data/mockDataGoals';
import mockDataTasks from '@/data/mockDataTasks';
import { Goal } from '@/types';
import {
	getAllTasksIdsFromGoalId,
	getCommaSeparatedStringsFromArray,
	getItemById,
	getTasksDataFromTasksIds,
	titleCaseToKebabCase,
} from '@/utils';
import Link from 'next/link';

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
						<details>
							<summary className={titleCaseToKebabCase(status)}>{`${
								index + 1
							}. ${title}`}</summary>
							<table>
								<caption className='hidden'>{`${index + 1}. ${title}`}</caption>
								<thead>
									<tr>
										<th>ID</th>
										<th>Description</th>
										<th>Related Goals IDs</th>
										<th>Status</th>
										<th>Task Link</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{id}</td>
										<td>{description}</td>
										<td>
											{getCommaSeparatedStringsFromArray(relatedGoalsIds)}
										</td>
										<td
											style={{
												backgroundColor: STATUS_COLORS[status],
											}}
										>
											{status}
										</td>
										<td>
											<Link href={`/tasks-manager/tasks/${task.url}`}>
												Link
											</Link>
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
						</details>
					</div>
				);
			})}
			<style jsx>{`
				summary {
					font-size: 1.5rem;
					font-weight: bold;
					padding: 1rem;
					cursor: pointer;
				}

				summary.not-started {
					background-color: ${STATUS_COLORS['Not Started']};
				}

				summary.not-started:hover {
					background-color: ${STATUS_COLORS['Not Started Hover']};
				}

				summary.in-progress {
					background-color: ${STATUS_COLORS['In Progress']};
				}

				summary.in-progress:hover {
					background-color: ${STATUS_COLORS['In Progress Hover']};
				}

				summary.completed {
					background-color: ${STATUS_COLORS['Completed']};
				}

				summary.completed:hover {
					background-color: ${STATUS_COLORS['Completed Hover']};
				}
			`}</style>
		</div>
	);
};

export default GoalTasksDisplay;
