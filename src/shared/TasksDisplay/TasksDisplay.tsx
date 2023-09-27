import { STATUS_COLORS } from '@/constants';
import mockDataTasks from '@/data/mockDataTasks';
import {
	getCommaSeparatedStringsFromArray,
	getGeneralTasks,
	getGoalTasks,
	getLearningResourceTasks,
} from '@/utils';
import Link from 'next/link';

const TasksDisplay = () => {
	const generalTasks = getGeneralTasks(mockDataTasks);
	const goalTasks = getGoalTasks(mockDataTasks);
	return (
		<div>
			<h2>General Tasks</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Task Steps</th>
						<th>Link</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{generalTasks.map((task) => {
						const { id, title, description, taskSteps, status, url } = task;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>
									<table>
										<tr>
											<th>ID</th>
											<th>Title</th>
											<th>Description</th>
											<th>Status</th>
										</tr>
										{taskSteps?.map((taskSteps) => {
											return (
												<tr>
													<td>{taskSteps.id}</td>
													<td>{taskSteps.title}</td>
													<td>{taskSteps.description}</td>
													<td
														style={{
															backgroundColor: STATUS_COLORS[taskSteps.status],
														}}
													>
														{taskSteps.status}
													</td>
												</tr>
											);
										})}
									</table>
								</td>
								<td>
									<Link href={`tasks/${url}`}>Link</Link>
								</td>
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
			<h2>Goal Tasks</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Related Goals IDs</th>
						<th>Task Steps</th>
						<th>Link</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{goalTasks.map((task) => {
						const {
							id,
							title,
							description,
							relatedGoalsIds,
							taskSteps,
							url,
							status,
						} = task;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedGoalsIds)}</td>
								<td>
									<table>
										<tr>
											<th>ID</th>
											<th>Title</th>
											<th>Description</th>
											<th>Status</th>
										</tr>
										{taskSteps?.map((taskSteps) => {
											return (
												<tr>
													<td>{taskSteps.id}</td>
													<td>{taskSteps.title}</td>
													<td>{taskSteps.description}</td>
													<td
														style={{
															backgroundColor: STATUS_COLORS[taskSteps.status],
														}}
													>
														{taskSteps.status}
													</td>
												</tr>
											);
										})}
									</table>
								</td>
								<td>
									<Link href={`tasks/${url}`}>Link</Link>
								</td>
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
			<h2>Learning Resource Tasks</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Learning Resource ID</th>
						<th>Related Goals IDs</th>
						<th>Task Steps</th>
						<th>Link</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{getLearningResourceTasks(mockDataTasks).map((task) => {
						const {
							id,
							title,
							url,
							description,
							learningResourceId,
							relatedGoalsIds,
							taskSteps,
							status,
						} = task;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{learningResourceId}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedGoalsIds)}</td>
								<td>
									<table>
										<tr>
											<th>ID</th>
											<th>Title</th>
											<th>Description</th>
											<th>Status</th>
										</tr>
										{taskSteps?.map((taskSteps) => {
											return (
												<tr>
													<td>{taskSteps.id}</td>
													<td>{taskSteps.title}</td>
													<td>{taskSteps.description}</td>
													<td
														style={{
															backgroundColor: STATUS_COLORS[taskSteps.status],
														}}
													>
														{taskSteps.status}
													</td>
												</tr>
											);
										})}
									</table>
								</td>
								<td>
									<Link href={`tasks/${url}`}>Link</Link>
								</td>
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

export default TasksDisplay;
