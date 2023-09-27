import { Task } from '@/types';

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
						<th>Start Date</th>
						<th>Completed Date</th>
						<th>Due Date</th>
						<th>Estimated Hours to Complete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{createDate?.toString()}</td>
						<td>{startDate?.toString()}</td>
						<td>{completedDate?.toString()}</td>
						<td>{dueDate?.toString()}</td>
						<td>{estimatedHours}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TaskDateAndTimeDisplay;
