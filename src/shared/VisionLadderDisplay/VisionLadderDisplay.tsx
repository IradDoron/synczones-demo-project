import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisionLadders from '@/data/mockDataVisionLadders';
import mockDataVisions from '@/data/mockDataVisions';
import VisionComponentLadderDisplay from '@/shared/VisionComponentLadderDisplay';
import {
	getVisionComponentsByVisionId,
	getVisionComponentsIdsByVisionId,
	getVisionComponentsLaddersByVisionComponentsIds,
	getVisionDescriptionByVisionId,
	getVisionTitleByVisionId,
} from '@/utils';

type Props = {
	visionId: number;
};

const VisionLadderDisplay = ({ visionId }: Props) => {
	const visionTitle = getVisionTitleByVisionId(mockDataVisions, visionId);
	const visionDescription = getVisionDescriptionByVisionId(
		mockDataVisions,
		visionId
	);
	const visionComponents = getVisionComponentsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	console.log('visionComponents', visionComponents);

	const visionComponentsIds = getVisionComponentsIdsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	const visionComponentsLadders =
		getVisionComponentsLaddersByVisionComponentsIds(
			mockDataVisionLadders,
			visionComponentsIds
		);

	return (
		<div>
			<h2>{visionTitle}</h2>
			<table>
				<thead>
					<tr>
						<th>Vision ID</th>
						<th>Vision Title</th>
						<th>Vision Description</th>
						<th>Vision Components</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{visionId}</td>
						<td>{visionTitle}</td>
						<td>{visionDescription}</td>
						<td>
							{visionComponents.length > 0 && (
								<div>
									<ul
										style={{
											paddingLeft: '2rem',
										}}
									>
										{visionComponents.map((visionComponent) => {
											const { id, title } = visionComponent;
											return <li key={id}>{title}</li>;
										})}
									</ul>
								</div>
							)}
						</td>
					</tr>
				</tbody>
			</table>

			<div>
				<section>
					{visionComponentsLadders.map((visionComponentLadder) => {
						return (
							<VisionComponentLadderDisplay
								key={visionComponentLadder.id}
								visionLadder={visionComponentLadder}
							/>
						);
					})}
				</section>
			</div>

			<br />
			<br />
		</div>
	);
};

export default VisionLadderDisplay;
