'use client';

import mockDataTasks from '@/data/mockDataTasks';
import TaskDisplay from '@/shared/TaskDisplay';
import { getTaskFromTaskUrl } from '@/utils';
import { useParams } from 'next/navigation';

const TaskPage = () => {
	const { task } = useParams() as { task: string };
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
