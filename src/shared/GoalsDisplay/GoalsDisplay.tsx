import type { Goal } from '@/types';

type Props = {
	goals: Goal[];
};

const GoalsDisplay = ({ goals }: Props) => {
	return (
		<div>
			<h2>Goals</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Vision ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Is Completed</th>
					</tr>
				</thead>
				<tbody>
					{goals.map((goal) => (
						<tr key={goal.id}>
							<td>{goal.id}</td>
							<td>
								{goal.relatedVisionsIds.map((visionId, index) => {
									const lastIdIndex = goal.relatedVisionsIds.length - 1;
									if (index !== lastIdIndex) {
										return <span key={visionId}>{visionId}, </span>;
									} else {
										return <span key={visionId}>{visionId}</span>;
									}
								})}
							</td>
							<td>{goal.title}</td>
							<td>{goal.description}</td>
							<td>{goal.isCompleted ? 'True' : 'False'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default GoalsDisplay;
