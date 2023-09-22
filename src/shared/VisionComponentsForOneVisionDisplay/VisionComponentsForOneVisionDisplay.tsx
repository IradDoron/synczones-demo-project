import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisions from '@/data/mockDataVisions';
import { Vision } from '@/types';
import { getAllVisionComponentsOfVisionByVisionId, getItemById } from '@/utils';

type Props = {
	visionId: number;
};

const VisionComponentsForOneVisionDisplay = ({ visionId }: Props) => {
	const vision = getItemById(mockDataVisions, visionId) as Vision;
	const visionComponents = getAllVisionComponentsOfVisionByVisionId(
		mockDataVisionComponents,
		visionId
	);
	const { id, title, description } = vision;
	return (
		<div>
			<h2>
				Vision Components For: <span>{title}</span>
			</h2>
			<table>
				<thead>
					<tr>
						<th>Vision ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Vision Components</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{title}</td>
						<td>{description}</td>
						<td>
							<ul>
								{visionComponents.map((visionComponent) => {
									const { id, title } = visionComponent;
									return (
										<li key={id}>
											<span>{title}</span>
										</li>
									);
								})}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default VisionComponentsForOneVisionDisplay;
