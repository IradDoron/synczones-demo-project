'use client';

import { STATUS_COLORS } from '@/constants';
import mockDataGoals from '@/data/mockDataGoals';
import AddTaskModal from '@/shared/AddTaskModal';
import GoalProcessDisplay from '@/shared/GoalProcessDisplay';
import GoalTasksDisplay from '@/shared/GoalTasksDisplay';
import { Goal, LangParam } from '@/types';
import {
	getCommaSeparatedStringsFromArray,
	getGoalFromGoalId,
	getGoalIdFromGoalUrl,
} from '@/utils';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const GoalPage = ({ params: { lang } }: LangParam) => {
	const { goal } = useParams() as { goal: string };
	const goalId = getGoalIdFromGoalUrl(mockDataGoals, goal);
	const goalData = getGoalFromGoalId(mockDataGoals, goalId);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const dictionary = getDictionaryClient(lang);
	const { page } = dictionary.app['goals-manager'].goals['[goal]'];

	if (!goalData) {
		return (
			<div>
				<h1>{page.title}</h1>
				<p>{page['goal not found']}</p>
			</div>
		);
	}

	const { id, relatedVisionsIds, title, url, description, status } =
		goalData as Goal;

	const { process } = goalData as Goal;

	const handleAddTask = () => {
		setIsTaskModalOpen(true);
	};

	return (
		<div>
			<h1>{page.title}</h1>
			<div>
				<table>
					<caption
						style={{
							backgroundColor: STATUS_COLORS[status],
						}}
					>
						<h2>{title}</h2>
					</caption>
					<thead>
						<tr>
							<th>{page['goal table headers'].id}</th>
							<th>{page['goal table headers'].title}</th>
							<th>{page['goal table headers'].url}</th>
							<th> {page['goal table headers']['related visions IDs']}</th>
							<th>{page['goal table headers'].description}</th>
							<th> {page['goal table headers'].status}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{id}</td>
							<td>{title}</td>
							<td>{url}</td>
							<td>{getCommaSeparatedStringsFromArray(relatedVisionsIds)}</td>
							<td>{description}</td>
							<td
								style={{
									backgroundColor: STATUS_COLORS[status],
								}}
							>
								{status}
							</td>
						</tr>
					</tbody>
				</table>
				<h3>{page['goal process question']}</h3>
				<GoalProcessDisplay goalProcess={process} />
				<h3>{page['tasks question']}</h3>
				<button onClick={handleAddTask}>Add Task</button>
				<GoalTasksDisplay goalId={id} />
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			<AddTaskModal
				isOpen={isTaskModalOpen}
				setIsOpen={setIsTaskModalOpen}
				info={{ goalId: id }}
			/>
		</div>
	);
};

export default GoalPage;
