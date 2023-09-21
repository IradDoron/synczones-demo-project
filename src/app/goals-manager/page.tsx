import mockDataGoals from '@/data/mockDataGoals';
import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisionLadders from '@/data/mockDataVisionLadders';
import mockDataVisions from '@/data/mockDataVisions';
import GoalsDisplay from '@/shared/GoalsDisplay';
import VisionComponentLadderDisplay from '@/shared/VisionComponentLadderDisplay';
import VisionComponentsDisplay from '@/shared/VisionComponentsDisplay';
import VisionLadderDisplay from '@/shared/VisionLadderDisplay';
import VisionsDisplay from '@/shared/VisionsDisplay';

const GoalsManagerPage = () => {
	return (
		<div>
			<h1>Goals Manager</h1>
			<GoalsDisplay goals={mockDataGoals} />
			<br />
			<br />
			<VisionsDisplay visions={mockDataVisions} />
			<br />
			<br />
			<VisionComponentsDisplay visionComponents={mockDataVisionComponents} />
			<br />
			<br />
			<div>
				{mockDataVisionLadders.map((visionLadder) => {
					return (
						<VisionComponentLadderDisplay
							key={visionLadder.id}
							visionLadder={visionLadder}
						/>
					);
				})}
			</div>
			<br />
			<br />
			<div>
				{mockDataVisions.map((vision) => {
					const { id } = vision;
					return <VisionLadderDisplay key={id} visionId={id} />;
				})}
			</div>
			<br />
			<br />
		</div>
	);
};

export default GoalsManagerPage;

// VisionLadderDisplay
