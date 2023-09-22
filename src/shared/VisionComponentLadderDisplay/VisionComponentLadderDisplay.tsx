import mockDataGoals from '@/data/mockDataGoals';
import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import { VisionComponentLadder } from '@/types';
import { getCommaSeparatedStringsFromArray, getItemById } from '@/utils';

type Props = {
	visionLadder: VisionComponentLadder;
};

const VisionComponentLadderDisplay = ({ visionLadder }: Props) => {
	const { id, visionComponentId, steps } = visionLadder;
	const visionComponentTitle = getItemById(
		mockDataVisionComponents,
		visionComponentId
	)?.title;
	return (
		<div>
			<br />
			<h3>
				Vision Component Ladder: <span>{visionComponentTitle}</span>
			</h3>
			<br />
			<table>
				<thead>
					<tr>
						<th>Vision Component Ladder ID</th>
						<th>Vision Component ID</th>
						<th>Vision Component Title</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{visionComponentId}</td>
						<td>{visionComponentTitle}</td>
					</tr>
				</tbody>
			</table>

			<br />
			<br />

			{steps.map((step, index) => {
				const { title, description, goalIds } = step;
				return (
					<table key={index}>
						<thead>
							<tr>
								<th>Step</th>
								<th>Title</th>
								<th>Description</th>
								<th>Goals IDs</th>
								<th>Goals</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{steps.length - index}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{getCommaSeparatedStringsFromArray(goalIds)}</td>
								<td>
									<ul
										style={{
											paddingLeft: '2rem',
										}}
									>
										{goalIds.map((goalId) => {
											return (
												<li key={goalId}>
													{getItemById(mockDataGoals, goalId)?.title}
												</li>
											);
										})}
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				);
			})}
		</div>
	);
};

export default VisionComponentLadderDisplay;
