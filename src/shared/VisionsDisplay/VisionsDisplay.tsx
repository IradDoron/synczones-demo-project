import type { Vision } from '@/types';

type Props = {
	visions: Vision[];
};

const VisionsDisplay = ({ visions }: Props) => {
	return (
		<div>
			<h1>Visions</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Created At</th>
					</tr>
				</thead>
				<tbody>
					{visions.map((vision) => {
						const { id, title, description, createdAt } = vision;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{createdAt.toDateString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default VisionsDisplay;
