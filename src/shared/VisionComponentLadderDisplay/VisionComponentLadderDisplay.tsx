import mockDataVisionComponentLadders from '@/data/mockDataVisionComponentLadders';
import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import VisionComponentSteps from '@/shared/VisionComponentSteps';
import VisionComponentSummary from '@/shared/VisionComponentSummary';
import { VisionComponent, VisionComponentLadder } from '@/types';
import {
	getItemById,
	getVisionComponentByVisionComponentId,
	getVisionComponentStepsFromVisionComponentId,
	isVisionComponentHasVisionComponentLadder,
} from '@/utils';

type Props = {
	visionComponentId: number;
};

const VisionComponentLadderDisplay = ({ visionComponentId }: Props) => {
	const hasLadder = isVisionComponentHasVisionComponentLadder(
		visionComponentId,
		mockDataVisionComponentLadders
	);

	const steps = getVisionComponentStepsFromVisionComponentId(
		mockDataVisionComponentLadders,
		visionComponentId
	);

	return (
		<div>
			{hasLadder ? (
				<div>
					<VisionComponentSummary visionComponentId={visionComponentId} />
					<br />
					<VisionComponentSteps steps={steps} />
				</div>
			) : (
				<div>
					<VisionComponentSummary visionComponentId={visionComponentId} />
				</div>
			)}
		</div>
	);
};

export default VisionComponentLadderDisplay;
