import { Task } from '@/types';
import { isExistAndNotEmpty } from '@/utils';

type Props = {
	task: Task;
};

const TaskDateAndTimeDisplay = ({ task }: Props) => {
	const { createDate, startDate, completedDate, dueDate, estimatedHours } =
		task;
	return (
		<>
			<h2>Date and Time Info</h2>
			<table>
				<thead>
					<tr>
						<th>Create Date</th>
						{isExistAndNotEmpty(startDate) && <th>Start Date</th>}
						{isExistAndNotEmpty(completedDate) && <th>Completed Date</th>}
						{isExistAndNotEmpty(dueDate) && <th>Due Date</th>}
						{isExistAndNotEmpty(estimatedHours) && (
							<th>Estimated Hours to Complete</th>
						)}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{createDate?.toString()}</td>
						{isExistAndNotEmpty(startDate) && <td>{startDate?.toString()}</td>}
						{isExistAndNotEmpty(completedDate) && (
							<td>{completedDate?.toString()}</td>
						)}
						{isExistAndNotEmpty(dueDate) && <td>{dueDate?.toString()}</td>}
						{isExistAndNotEmpty(estimatedHours) && <td>{estimatedHours}</td>}
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TaskDateAndTimeDisplay;
