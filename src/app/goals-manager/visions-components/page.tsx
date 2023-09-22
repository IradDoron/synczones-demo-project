import mockDataVisionComponents from '@/data/mockDataVisionComponents';
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
			<div>
				{allRelatedVisionsIds.map((visionId) => {
					return (
						<VisionComponentsForOneVisionDisplay
							key={visionId}
							visionId={visionId}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default VisionsComponentsPage;
