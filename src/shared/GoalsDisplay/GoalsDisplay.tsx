import type { Goal } from '@/types';
import Link from 'next/link';

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
						<th>Status</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{goals.map((goal) => {
						const { id, relatedVisionsIds, title, description, url, status } =
							goal;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>
									{relatedVisionsIds.map((visionId, index) => {
										const lastIdIndex = relatedVisionsIds.length - 1;
										if (index !== lastIdIndex) {
											return <span key={visionId}>{visionId}, </span>;
										} else {
											return <span key={visionId}>{visionId}</span>;
										}
									})}
								</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{status}</td>
								<td>
									<Link href={`goals/${url}`}>Link</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default GoalsDisplay;
