'use client';

import mockDataTasks from '@/data/mockDataTasks';
import TaskDisplay from '@/shared/TaskDisplay';
import { getHebrewUrlStringFromHebrewUrl, getTaskFromTaskUrl } from '@/utils';
import { useParams } from 'next/navigation';

const TaskPage = () => {
	let { task } = useParams() as { task: string };
	if (task.includes('%')) {
		task = getHebrewUrlStringFromHebrewUrl(task);
	}
	const taskData = getTaskFromTaskUrl(mockDataTasks, task);

	if (!taskData) {
		return (
			<div>
				<h1>Task Page</h1>
				<p>Task not found</p>
			</div>
		);
	}

	return <TaskDisplay task={taskData} />;
};

export default TaskPage;
