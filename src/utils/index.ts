import { Vision, VisionComponent, VisionComponentLadder } from '@/types';

export const getCommaSeparatedStringsFromArray = (
	array: (string | number)[] | undefined
) => {
	console.log('array', array);
	if (!array) {
		return '';
	}
	let result = '';
	array.forEach((item, index) => {
		result += item;
		if (index !== array.length - 1) {
			result += ', ';
		}
	});
	return result;
};

export const getItemById = (arr: any[], id: number) => {
	return arr.find((item) => item.id === id);
};

export const getVisionComponentsByVisionId = (
	visionComponents: VisionComponent[],
	visionId: number
) => {
	return visionComponents.filter((visionComponent) =>
		visionComponent.relatedVisionsIds.includes(visionId)
	);
};

export const getVisionComponentsLaddersByVisionComponentsIds = (
	visionComponentsLadders: VisionComponentLadder[],
	visionComponentsIds: number[]
) => {
	const result: VisionComponentLadder[] = [];
	visionComponentsIds.forEach((visionComponentsId) => {
		const visionComponentLadder = visionComponentsLadders.find(
			(visionComponentLadder) =>
				visionComponentLadder.visionComponentId === visionComponentsId
		);
		if (visionComponentLadder) {
			result.push(visionComponentLadder);
		}
	});

	return result;
};

export const getVisionComponentsIdsByVisionId = (
	visionComponents: VisionComponent[],
	visionId: number
) => {
	const visionVisionComponents = getVisionComponentsByVisionId(
		visionComponents,
		visionId
	);
	return visionVisionComponents.map((visionComponent) => visionComponent.id);
};

export const getVisionTitleByVisionId = (
	visions: Vision[],
	visionId: number
) => {
	const vision = getItemById(visions, visionId);
	return vision ? vision.title : '';
};

export const getVisionDescriptionByVisionId = (
	visions: Vision[],
	visionId: number
) => {
	const vision = getItemById(visions, visionId);
	return vision ? vision.description : '';
};

export const kebabCaseToTitleCase = (kebabCaseString: string) => {
	const words = kebabCaseString.split('-');
	const result = words.map((word) => {
		return word[0].toUpperCase() + word.slice(1);
	});
	return result.join(' ');
};
