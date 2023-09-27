import { STATUS_COLORS } from '@/constants';
import mockDataTasks from '@/data/mockDataTasks';
import { Task } from '@/types';
import { getItemById } from '@/utils';
import Link from 'next/link';

type Props = {
	task: Task;
};

const TaskSubTasksDisplay = ({ task }: Props) => {
	const { subTasksIds } = task;

	return (
		<>
			<h2>Sub Tasks</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Type</th>
						<th>Status</th>
						<th>Progress</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{subTasksIds?.map((subTaskId) => {
						const subTask = getItemById(mockDataTasks, subTaskId) as Task;
						const { id, title, description, status, progress, url, taskType } =
							subTask;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{taskType}</td>
								<td
									style={{
										backgroundColor: STATUS_COLORS[status],
									}}
								>
									{status}
								</td>
								<td>{progress}</td>
								<td>
									<Link href={`tasks/${url}`}>Link</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default TaskSubTasksDisplay;
