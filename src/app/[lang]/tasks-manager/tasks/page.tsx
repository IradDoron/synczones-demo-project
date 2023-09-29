'use client';

import AddTaskModal from '@/shared/AddTaskModal';
import TasksDisplay from '@/shared/TasksDisplay';
import { useState } from 'react';

const TasksPage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	return (
		<div>
			<h1>Tasks</h1>
			<button onClick={() => setIsModalOpen(true)}>Add Task</button>
			<TasksDisplay />
			<button onClick={() => setIsModalOpen(true)}>Add Task</button>
			<AddTaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
		</div>
	);
};

export default TasksPage;
