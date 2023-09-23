import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisions from '@/data/mockDataVisions';
import VisionComponentsDisplay from '@/shared/VisionComponentsDisplay';
import VisionComponentsForOneVisionDisplay from '@/shared/VisionComponentsForOneVisionDisplay';
import { getAllRelatedVisionsIdsFromVisionsComponents } from '@/utils';

const VisionsComponentsPage = () => {
	const allRelatedVisionsIds = getAllRelatedVisionsIdsFromVisionsComponents(
		mockDataVisionComponents
	);

	return (
		<div>
			<h1>Visions Components</h1>
			<VisionComponentsDisplay visionComponents={mockDataVisionComponents} />
			<br />
			<div>
				{mockDataVisions.map((vision) => {
					const { id: visionId } = vision;
					return (
						<div key={visionId}>
							<br />
							<VisionComponentsForOneVisionDisplay
								key={visionId}
								visionId={visionId}
							/>
							<br />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VisionsComponentsPage;
