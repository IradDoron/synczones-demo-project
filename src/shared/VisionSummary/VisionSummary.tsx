import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisions from '@/data/mockDataVisions';
import {
	getVisionComponentsByVisionId,
	getVisionComponentsIdsByVisionId,
	getVisionDescriptionByVisionId,
	getVisionTitleByVisionId,
} from '@/utils';

type Props = {
	visionId: number;
};

const VisionSummary = ({ visionId }: Props) => {
	const visionTitle = getVisionTitleByVisionId(mockDataVisions, visionId);
	const visionDescription = getVisionDescriptionByVisionId(
		mockDataVisions,
		visionId
	);
	const visionComponents = getVisionComponentsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	const visionComponentsIds = getVisionComponentsIdsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	return (
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
	);
};

export default VisionSummary;
