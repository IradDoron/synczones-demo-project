import mockDataVisionComponentLadders from '@/data/mockDataVisionComponentLadders';
import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisions from '@/data/mockDataVisions';
import VisionComponentLadderDisplay from '@/shared/VisionComponentLadderDisplay';
import VisionSummary from '@/shared/VisionSummary';
import {
	getVisionComponentLadderFromVisionComponentId,
	getVisionComponentsByVisionId,
	getVisionComponentsIdsByVisionId,
	getVisionComponentsLaddersByVisionComponentsIds,
	getVisionDescriptionByVisionId,
	getVisionTitleByVisionId,
} from '@/utils';

type Props = {
	visionId: number;
};

const VisionLadderDisplay = ({ visionId }: Props) => {
	const visionTitle = getVisionTitleByVisionId(mockDataVisions, visionId);

	const visionComponentsIds = getVisionComponentsIdsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	return (
		<div>
			<h2>{visionTitle}</h2>

			<VisionSummary visionId={visionId} />
			<div>
				{visionComponentsIds.map((visionComponentId) => {
					return (
						<VisionComponentLadderDisplay
							key={visionComponentId}
							visionComponentId={visionComponentId}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default VisionLadderDisplay;
