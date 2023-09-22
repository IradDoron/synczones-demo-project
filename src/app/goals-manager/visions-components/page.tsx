import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import VisionComponentsDisplay from '@/shared/VisionComponentsDisplay';

const VisionsComponentsPage = () => {
	return (
		<div>
			<h1>Visions Components</h1>
			<VisionComponentsDisplay visionComponents={mockDataVisionComponents} />
		</div>
	);
};

export default VisionsComponentsPage;
