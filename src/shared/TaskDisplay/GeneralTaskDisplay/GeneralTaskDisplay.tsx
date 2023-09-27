import { STATUS_COLORS } from '@/constants';
import { GeneralTask } from '@/types';

type Props = {
	task: GeneralTask;
};

const GeneralTaskDisplay = ({ task }: Props) => {
	const { id, title, taskType, description, taskSteps, status } = task;
	return (
		<div>
			<h2>General Task Display</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Type</th>
						<th>Description</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{title}</td>
						<td>{taskType}</td>
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
			<h2>Task Steps</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{taskSteps?.map((taskStep) => {
						const { id, title, description, status } = taskStep;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td
									style={{
										backgroundColor: STATUS_COLORS[status],
									}}
								>
									{status}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default GeneralTaskDisplay;
