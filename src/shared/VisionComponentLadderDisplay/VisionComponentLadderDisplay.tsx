import mockDataGoals from '@/data/mockDataGoals';
import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import { VisionComponentLadder } from '@/types';
import { getCommaSeparatedStringsFromArray, getItemById } from '@/utils';

type Props = {
	visionLadder: VisionComponentLadder;
};

const VisionComponentLadderDisplay = ({ visionLadder }: Props) => {
	const { id, visionComponentId, steps } = visionLadder;
	return (
		<div>
			<h2>Vision Component Ladder Display</h2>
			<p>
				ID: <span>{id}</span>
			</p>
			<p>
				Vision Component ID: <span>{visionComponentId}</span>
			</p>
			<p>
				Vision Component Title:{' '}
				<span>
					{getItemById(mockDataVisionComponents, visionComponentId)?.title}
				</span>
			</p>
			{steps.map((step, index) => {
				return (
					<div key={index}>
						<p>
							Step: <span>{steps.length - index}</span>
						</p>
						<p>
							Goals IDs: <span>{getCommaSeparatedStringsFromArray(step)}</span>
						</p>
						<ul
							style={{
								paddingLeft: '2rem',
							}}
						>
							{step.map((goalId) => {
								return (
									<li key={goalId}>
										{getItemById(mockDataGoals, goalId)?.title}
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default VisionComponentLadderDisplay;
