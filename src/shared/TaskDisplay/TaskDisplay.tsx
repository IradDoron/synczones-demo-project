import GeneralTaskDisplay from '@/shared/TaskDisplay/GeneralTaskDisplay';
import GoalTaskDisplay from '@/shared/TaskDisplay/GoalTaskDisplay';
import LearningResourceTaskDisplay from '@/shared/TaskDisplay/LearningResourceTaskDisplay';
import { GeneralTask, GoalTask, LearningResourceTask, Task } from '@/types';

type Props = {
	task: Task;
};

const TaskDisplay = ({ task }: Props) => {
	const { taskType } = task;
	return (
		<div>
			<h1>Task Display</h1>
			{(() => {
				switch (taskType) {
					case 'General': {
						const generalTask = task as GeneralTask;
						return <GeneralTaskDisplay task={generalTask} />;
					}
					case 'Goal': {
						const goalTask = task as GoalTask;
						return <GoalTaskDisplay task={goalTask} />;
					}
					case 'Learning Resource': {
						const learningResourceTask = task as LearningResourceTask;
						return <LearningResourceTaskDisplay task={learningResourceTask} />;
					}
				}
			})()}
		</div>
	);
};

export default TaskDisplay;
