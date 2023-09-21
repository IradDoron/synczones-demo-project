import mockDataVisionComponents from '@/data/mockDataVisionComponents';
import mockDataVisionLadders from '@/data/mockDataVisionLadders';
import mockDataVisions from '@/data/mockDataVisions';
import VisionComponentLadderDisplay from '@/shared/VisionComponentLadderDisplay';
import {
	getVisionComponentsByVisionId,
	getVisionComponentsIdsByVisionId,
	getVisionComponentsLaddersByVisionComponentsIds,
	getVisionTitleByVisionId,
} from '@/utils';

type Props = {
	visionId: number;
};

const VisionLadderDisplay = ({ visionId }: Props) => {
	const visionComponents = getVisionComponentsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	console.log('visionComponents', visionComponents);

	const visionComponentsIds = getVisionComponentsIdsByVisionId(
		mockDataVisionComponents,
		visionId
	);

	const visionComponentsLadders =
		getVisionComponentsLaddersByVisionComponentsIds(
			mockDataVisionLadders,
			visionComponentsIds
		);

	return (
		<div>
			<h2>Vision Ladder</h2>
			<div>
				<h3>
					Vision ID: <span>{visionId}</span>
				</h3>
				<h3>
					Vision Title:{' '}
					<span>{getVisionTitleByVisionId(mockDataVisions, visionId)}</span>
				</h3>
				{visionComponents.length > 0 && (
					<div>
						<h3>Vision Components</h3>
						<ul
							style={{
								paddingLeft: '2rem',
							}}
						>
							{visionComponents.map((visionComponent) => {
								const { id, title } = visionComponent;
								return <li key={id}>{title}</li>;
							})}
						</ul>
					</div>
				)}
			</div>
			{visionComponentsLadders.length > 0 && (
				<div>
					<h3>Vision Components Ladders</h3>
					<section>
						{visionComponentsLadders.map((visionComponentLadder) => {
							return (
								<VisionComponentLadderDisplay
									key={visionComponentLadder.id}
									visionLadder={visionComponentLadder}
								/>
							);
						})}
					</section>
				</div>
			)}
			<br />
			<br />
		</div>
	);
};

export default VisionLadderDisplay;
