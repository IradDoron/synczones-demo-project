import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';

type Props = {
	task: Task;
};

const TaskMetaInfoDisplay = ({ task }: Props) => {
	const {
		taskType,
		priority,
		progress,
		labels,
		learningResourceId,
		relatedGoalsIds,
	} = task;

	return (
		<>
			<h2>Meta Info</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Priority</th>
						<th>Progress</th>
						<th>Labels</th>
						<th>Learning Resource ID</th>
						<th>Related Goals IDs</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{taskType}</td>
						<td>{priority}</td>
						<td>{progress}</td>
						<td>{getCommaSeparatedStringsFromArray(labels)}</td>
						<td>{learningResourceId}</td>
						<td>{getCommaSeparatedStringsFromArray(relatedGoalsIds)}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TaskMetaInfoDisplay;
