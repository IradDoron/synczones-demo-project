import mockDataVisions from '@/data/mockDataVisions';
import { VisionComponent } from '@/types';
import {
	getCommaSeparatedStringsFromArray,
	getVisionTitlesFromVisionIds,
} from '@/utils';

type Props = {
	visionComponents: VisionComponent[];
};

const VisionComponentsDisplay = ({ visionComponents }: Props) => {
	return (
		<div>
			<h2>All Vision Components</h2>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Related Visions IDs</th>
						<th>Related Visions Titles</th>
					</tr>
				</thead>
				<tbody>
					{visionComponents.map((visionComponent) => {
						const { id, title, description, relatedVisionsIds } =
							visionComponent;
						const relatedVisionsTitles = getVisionTitlesFromVisionIds(
							mockDataVisions,
							relatedVisionsIds
						);
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedVisionsIds)}</td>
								<td>
									{relatedVisionsTitles.length === 1
										? relatedVisionsTitles[0]
										: getCommaSeparatedStringsFromArray(relatedVisionsTitles)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default VisionComponentsDisplay;
