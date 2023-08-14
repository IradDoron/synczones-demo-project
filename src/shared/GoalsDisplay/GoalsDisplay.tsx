import type { Goal } from '@/types';

type Props = {
	goals: Goal[];
};

const GoalsDisplay = ({ goals }: Props) => {
	return (
		<div>
			<h1>Goals</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Vision ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Is Completed</th>
					</tr>
				</thead>
				<tbody>
					{goals.map((goal) => (
						<tr key={goal.id}>
							<td>{goal.id}</td>
							<td>{goal.visionId}</td>
							<td>{goal.title}</td>
							<td>{goal.description}</td>
							<td>{goal.startDate.toDateString()}</td>
							<td>{goal.endDate.toDateString()}</td>
							<td>{goal.isCompleted ? 'True' : 'False'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default GoalsDisplay;
