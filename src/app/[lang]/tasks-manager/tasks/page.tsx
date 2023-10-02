'use client';

import { Locale } from '@/i18n.config';
import AddTaskModal from '@/shared/AddTaskModal';
import TasksDisplay from '@/shared/TasksDisplay';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { useState } from 'react';

type Props = {
	params: { lang: Locale };
};

const TasksPage = ({ params: { lang } }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const dictionary = getDictionaryClient(lang);
	const { page } = dictionary.app['tasks-manager'].tasks;
	return (
		<div>
			<h1>{page.title}</h1>
			<button onClick={() => setIsModalOpen(true)}>Add Task</button>
			<TasksDisplay />
			<button onClick={() => setIsModalOpen(true)}>Add Task</button>
			<AddTaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
		</div>
	);
};

export default TasksPage;
