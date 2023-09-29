import mockDataVisions from '@/data/mockDataVisions';
import VisionLadderDisplay from '@/shared/VisionLadderDisplay';

const VisionsLaddersPage = () => {
	return (
		<div>
			<h2>All Visions Ladders Page</h2>
			<div>
				{mockDataVisions.map((vision) => {
					const { id } = vision;
					return <VisionLadderDisplay key={id} visionId={id} />;
				})}
			</div>
		</div>
	);
};

export default VisionsLaddersPage;
