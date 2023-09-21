import mockDataGoals from '@/data/mockDataGoals';
import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisionLadders from '@/data/mockDataVisionLadders';
import mockDataVisions from '@/data/mockDataVisions';
import GoalsDisplay from '@/shared/GoalsDisplay';
import VisionComponentsDisplay from '@/shared/VisionComponentsDisplay';
import VisionLadderDisplay from '@/shared/VisionLadderDisplay';
import VisionsDisplay from '@/shared/VisionsDisplay';

const GoalsManagerPage = () => {
	return (
		<div>
			<h1>Goals Manager</h1>
			<GoalsDisplay goals={mockDataGoals} />
			<VisionsDisplay visions={mockDataVisions} />
			<VisionComponentsDisplay visionComponents={mockDataVisionComponents} />
			<div>
				{mockDataVisionLadders.map((visionLadder) => {
					return (
						<VisionLadderDisplay
							key={visionLadder.id}
							visionLadder={visionLadder}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GoalsManagerPage;
