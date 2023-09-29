import { STATUS_COLORS } from '@/constants';
import { Task } from '@/types';
import TaskActionsDisplay from './TaskActionsDisplay';
import TaskAttachmentsDisplay from './TaskAttachmentsDisplay';
import TaskDateAndTimeDisplay from './TaskDateAndTimeDisplay';
import TaskDependenciesDisplay from './TaskDependenciesDisplay';
import TaskMetaInfoDisplay from './TaskMetaInfoDisplay';
import TaskNotesDisplay from './TaskNotesDisplay';
import TaskRecurrenceDisplay from './TaskRecurrenceDisplay';
import TaskStepsDisplay from './TaskStepsDisplay';
import TaskSubTasksDisplay from './TaskSubTasksDisplay';
import TaskWorkSessionsDisplay from './TaskWorkSessionsDisplay';

type Props = {
	task: Task;
};

const TaskDisplay = ({ task }: Props) => {
	const { id, title, description, status, attachments, notes } = task;
	return (
		<div>
			<h1>
				<span>{title}</span> - <span>(ID: {id})</span> -{' '}
				<span
					style={{
						backgroundColor: STATUS_COLORS[status],
						padding: '0.5rem',
					}}
				>
					{status}
				</span>
			</h1>
			<p
				style={{
					fontSize: '1.5rem',
				}}
			>
				{description}
			</p>
			<TaskMetaInfoDisplay task={task} />
			<TaskDateAndTimeDisplay task={task} />
			<TaskNotesDisplay task={task} />
			<TaskDependenciesDisplay task={task} />
			<TaskAttachmentsDisplay task={task} />

			<TaskStepsDisplay task={task} />
			<TaskSubTasksDisplay task={task} />
			<TaskRecurrenceDisplay task={task} />
			<TaskWorkSessionsDisplay task={task} />
			<TaskActionsDisplay taskId={id} />
		</div>
	);
};

export default TaskDisplay;
