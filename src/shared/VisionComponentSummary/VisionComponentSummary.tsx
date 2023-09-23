import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import { VisionComponent } from '@/types';
import { getCommaSeparatedStringsFromArray, getItemById } from '@/utils';

type Props = {
	visionComponentId: number;
};

const VisionComponentSummary = ({ visionComponentId }: Props) => {
	const visionComponent = getItemById(
		mockDataVisionComponents,
		visionComponentId
	) as VisionComponent;
	const { id, title, description, relatedVisionsIds } = visionComponent;
	return (
		<div>
			<h3>{title}</h3>
			<table>
				<thead>
					<tr>
						<th>Vision Component ID</th>
						<th>Vision Component Title</th>
						<th>Vision Component Description</th>
						<th>Related Visions IDs</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{title}</td>
						<td>{description}</td>
						<td>{getCommaSeparatedStringsFromArray(relatedVisionsIds)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default VisionComponentSummary;
