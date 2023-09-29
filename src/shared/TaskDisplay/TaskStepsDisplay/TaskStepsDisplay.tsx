import { STATUS_COLORS } from '@/constants';
import { Task } from '@/types';
import { isExistAndNotEmpty } from '@/utils';

type Props = {
	task: Task;
};

const TaskStepsDisplay = ({ task }: Props) => {
	const { taskSteps } = task;
	return (
		<>
			{isExistAndNotEmpty(taskSteps) && (
				<>
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
				</>
			)}
		</>
	);
};

export default TaskStepsDisplay;
