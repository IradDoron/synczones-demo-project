'use client';

import mockDataVisions from '@/data/mockDataVisions';
import VisionLadderDisplay from '@/shared/VisionLadderDisplay';
import { Vision } from '@/types';
import {
	getLastSegmentOfUrl,
	getVisionByVisionTitleInKebabCase,
} from '@/utils';
import { usePathname } from 'next/navigation';

const VisionLadderPage = () => {
	const pathName = usePathname();
	const visionTitleInKebabCase = getLastSegmentOfUrl(pathName);
	const visionData = getVisionByVisionTitleInKebabCase(
		mockDataVisions,
		visionTitleInKebabCase
	) as Vision;

	const { id } = visionData;

	return (
		<div>
			<VisionLadderDisplay visionId={id} />
		</div>
	);
};

export default VisionLadderPage;
