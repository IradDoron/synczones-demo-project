import mockDataVisionComponentLadders from '@/data/mockDataVisionComponentLadders';
import VisionComponentSteps from '@/shared/VisionComponentSteps';
import VisionComponentSummary from '@/shared/VisionComponentSummary';
import {
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
					<p>What should you do to acomplish this vision component?</p>
					<VisionComponentSteps steps={steps} />
				</div>
			) : (
				<div>
					<VisionComponentSummary visionComponentId={visionComponentId} />
					<br />
					<p>What should you do to acomplish this vision component?</p>
					<VisionComponentSteps steps={steps} />
				</div>
			)}
			<br />
			<br />
		</div>
	);
};

export default VisionComponentLadderDisplay;
