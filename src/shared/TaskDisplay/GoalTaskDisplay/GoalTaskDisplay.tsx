import { STATUS_COLORS } from '@/constants';
import { GoalTask } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';

type Props = {
	task: GoalTask;
};

const GoalTaskDisplay = ({ task }: Props) => {
	const {
		id,
		title,
		taskType,
		description,
		taskSteps,
		status,
		relatedGoalsIds,
	} = task;
	return (
		<div>
			<h2>Goal Task Display</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Type</th>
						<th>Description</th>
						<th>Related Goals IDs</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{title}</td>
						<td>{taskType}</td>
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
			<h2>Task Steps</h2>
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
		</div>
	);
};

export default GoalTaskDisplay;
