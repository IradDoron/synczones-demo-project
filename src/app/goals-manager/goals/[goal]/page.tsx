'use client';

import mockDataGoals from '@/data/mockDataGoals';
import { Goal } from '@/types';
import {
	getCommaSeparatedStringsFromArray,
	getGoalFromGoalId,
	getGoalIdFromGoalUrl,
} from '@/utils';
import { useParams } from 'next/navigation';

const GoalPage = () => {
	const { goal } = useParams() as { goal: string };
	const goalId = getGoalIdFromGoalUrl(mockDataGoals, goal);
	const goalData = getGoalFromGoalId(mockDataGoals, goalId);

	if (!goalData) {
		return (
			<div>
				<h1>Goal Page</h1>
				<p>Goal not found</p>
			</div>
		);
	}

	const { id, relatedVisionsIds, title, url, description, status } =
		goalData as Goal;

	return (
		<div>
			<h1>Goal Page</h1>

			<div>
				<table>
					<caption>{title}</caption>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>URL</th>
							<th>Related Visions IDs</th>
							<th>Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{id}</td>
							<td>{title}</td>
							<td>{url}</td>
							<td>{getCommaSeparatedStringsFromArray(relatedVisionsIds)}</td>
							<td>{description}</td>
							<td>{status}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default GoalPage;

