'use client';

import mockDataTasks from '@/data/mockDataTasks';
import AddTaskModal from '@/shared/AddTaskModal';
import { Task } from '@/types';
import { getItemById } from '@/utils';
import { useEffect, useState } from 'react';

type Props = {
	taskId: number;
};

const TaskActionsDisplay = ({ taskId }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [currentTaskData, setCurrentTaskData] = useState<Task | null>(null);
	const taskData = getItemById(mockDataTasks, taskId) as Task;

	useEffect(() => {
		setCurrentTaskData(taskData);
	}, []);

	const handleEdit = () => {
		setIsModalOpen(true);
	};

	return (
		<div>
			<h2>Actions</h2>
			<button onClick={handleEdit}>Edit</button>
			<button>Delete</button>
			<AddTaskModal
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				info={{ taskId }}
			/>
		</div>
	);
};

export default TaskActionsDisplay;
