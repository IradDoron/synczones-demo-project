import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray, isExistAndNotEmpty } from '@/utils';

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
						{isExistAndNotEmpty(labels) && <th>Labels</th>}
						{isExistAndNotEmpty(learningResourceId) && (
							<th>Learning Resource ID</th>
						)}
						{isExistAndNotEmpty(relatedGoalsIds) && <th>Related Goals IDs</th>}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{taskType}</td>
						<td>{priority}</td>
						<td>{progress}</td>
						{isExistAndNotEmpty(labels) && (
							<td>{getCommaSeparatedStringsFromArray(labels)}</td>
						)}
						{isExistAndNotEmpty(learningResourceId) && (
							<td>{learningResourceId}</td>
						)}
						{isExistAndNotEmpty(relatedGoalsIds) && (
							<td>{getCommaSeparatedStringsFromArray(relatedGoalsIds)}</td>
						)}
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TaskMetaInfoDisplay;
