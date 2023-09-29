import { Task } from '@/types';
import { isExistAndNotEmpty } from '@/utils';

type Props = {
	task: Task;
};

const TaskNotesDisplay = ({ task }: Props) => {
	const { notes } = task;

	return (
		<div>
			{isExistAndNotEmpty(notes) && (
				<>
					<h2>Notes</h2>
					<p>{notes}</p>
				</>
			)}
		</div>
	);
};

export default TaskNotesDisplay;
