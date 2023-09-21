import { VisionLadder } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';

type Props = {
	visionLadder: VisionLadder;
};

const VisionLadderDisplay = ({ visionLadder }: Props) => {
	const { id, visionComponentId, steps } = visionLadder;
	return (
		<div>
			<h2>Vision Ladder Display</h2>
			<p>
				ID: <span>{id}</span>
			</p>
			<p>
				Vision Component ID: <span>{visionComponentId}</span>
			</p>
			{steps.map((step, index) => {
				return (
					<div key={index}>
						<p>
							Step: <span>{steps.length - index - 1}</span>
						</p>
						<p>
							Goals IDs: <span>{getCommaSeparatedStringsFromArray(step)}</span>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default VisionLadderDisplay;
