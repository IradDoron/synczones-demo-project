import { VisionComponent } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';

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
					</tr>
				</thead>
				<tbody>
					{visionComponents.map((visionComponent) => {
						const { id, title, description, relatedVisionsIds } =
							visionComponent;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedVisionsIds)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default VisionComponentsDisplay;
