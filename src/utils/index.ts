import {
	Goal,
	Vision,
	VisionComponent,
	VisionComponentLadder,
	VisionLadderStep,
} from '@/types';

export const getCommaSeparatedStringsFromArray = (
	array: (string | number)[] | undefined
) => {
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

export const titleCaseToKebabCase = (titleCaseString: string) => {
	const words = titleCaseString.split(' ');
	const result = words.map((word) => {
		return word.toLowerCase();
	});
	return result.join('-');
};

export const getAllRelatedVisionsIdsFromVisionsComponents = (
	visionsComponents: VisionComponent[]
) => {
	const visionsIdsSet = new Set<number>();
	visionsComponents.forEach((visionComponent) => {
		const { relatedVisionsIds } = visionComponent;
		relatedVisionsIds.forEach((relatedVisionId) => {
			visionsIdsSet.add(relatedVisionId);
		});
	});
	const visionsIds = Array.from(visionsIdsSet);
	return visionsIds;
};

export const getAllVisionComponentsOfVisionByVisionId = (
	visionsComponents: VisionComponent[],
	visionId: number
) => {
	const visionComponents = visionsComponents.filter((visionComponent) =>
		visionComponent.relatedVisionsIds.includes(visionId)
	);
	return visionComponents;
};

export const getVisionComponentLadderFromVisionComponentId = (
	visionComponentsLadders: VisionComponentLadder[],
	visionComponentId: number
) => {
	const visionComponentLadder = visionComponentsLadders.find(
		(visionComponentLadder) =>
			visionComponentLadder.visionComponentId === visionComponentId
	);
	return visionComponentLadder;
};

export const getVisionComponentByVisionComponentId = (
	visionsComponents: VisionComponent[],
	visionComponentId: number
) => {
	const visionComponent = visionsComponents.find(
		(visionComponent) => visionComponent.id === visionComponentId
	);
	return visionComponent;
};

export const isVisionComponentHasVisionComponentLadder = (
	visionComponentId: number,
	visionComponentsLadders: VisionComponentLadder[]
) => {
	const visionComponentLadder = visionComponentsLadders.find(
		(visionComponentLadder) =>
			visionComponentLadder.visionComponentId === visionComponentId
	);
	return !!visionComponentLadder;
};

export const getVisionComponentStepsFromVisionComponentId = (
	visionComponentsLadders: VisionComponentLadder[],
	visionComponentId: number
) => {
	const hasLadder = isVisionComponentHasVisionComponentLadder(
		visionComponentId,
		visionComponentsLadders
	);

	if (!hasLadder) {
		return [];
	}

	const ladder = getVisionComponentLadderFromVisionComponentId(
		visionComponentsLadders,
		visionComponentId
	) as VisionComponentLadder;

	const { steps } = ladder;

	return steps;
};

export const getVisionByVisionTitleInKebabCase = (
	visions: Vision[],
	visionTitleInKebabCase: string
) => {
	const vision = visions.find(
		(vision) => titleCaseToKebabCase(vision.title) === visionTitleInKebabCase
	);
	return vision;
};

export const getLastSegmentOfUrl = (url: string) => {
	const segments = url.split('/');
	return segments[segments.length - 1];
};

export const getVisionTitlesFromVisionIds = (
	visions: Vision[],
	visionIds: number[]
) => {
	const visionTitles = visionIds.map((visionId) => {
		const vision = getItemById(visions, visionId) as Vision;
		return vision ? vision.title : '';
	});
	return visionTitles;
};

export const getGoalIdFromGoalUrl = (goals: Goal[], goalUrl: string) => {
	const goal = goals.find((goal) => goal.url === goalUrl);
	return goal ? goal.id : -1;
};

export const getGoalFromGoalId = (goals: Goal[], goalId: number) => {
	const goal = goals.find((goal) => goal.id === goalId);
	return goal;
};
