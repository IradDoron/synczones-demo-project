import { STATUS_COLORS } from '@/constants';
import mockDataTasks from '@/data/mockDataTasks';
import Link from 'next/link';

const TasksDisplay = () => {
	return (
		<div>
			<h2>All Tasks</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Task Type</th>
						<th>Link</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{mockDataTasks.map((task) => {
						const { id, title, description, taskType, url, status } = task;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{taskType}</td>
								<td>
									<Link href={`tasks/${url}`}>Link</Link>
								</td>
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

export default TasksDisplay;
