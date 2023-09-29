import {
	Goal,
	LearningResourceMark,
	Task,
	Vision,
	VisionComponent,
	VisionComponentLadder,
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

export const getAllTasksIdsFromGoalId = (goals: Goal[], goalId: number) => {
	const goal = getGoalFromGoalId(goals, goalId);
	if (!goal) {
		return [] as number[];
	}
	const { tasks: tasksIds } = goal;
	return tasksIds ? tasksIds : ([] as number[]);
};

export const getTasksDataFromTasksIds = (tasks: Task[], tasksIds: number[]) => {
	const tasksData = tasks.filter((task) => tasksIds.includes(task.id));
	return tasksData;
};

export const getLearningResourceCurrentMark = (mark: LearningResourceMark) => {
	const { markType, currentMark } = mark;
	switch (markType) {
		case 'Page': {
			return `Page ${currentMark}`;
		}

		case 'Time': {
			const seconds = currentMark as number;
			const hours = Math.floor(seconds / 3600);
			const minutes = Math.floor((seconds - hours * 3600) / 60);
			const secondsLeft = seconds - hours * 3600 - minutes * 60;
			const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
			const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const secondsString =
				secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`;
			const fullTimeString = `${hoursString}:${minutesString}:${secondsString}`;
			return fullTimeString;
		}

		case 'Lesson Number': {
			return `Lesson ${currentMark}`;
		}

		case 'URL': {
			return `URL: ${currentMark}`;
		}

		case 'Chapter': {
			return `Chapter: ${currentMark}`;
		}

		default: {
			return 'Unknown Mark Type';
		}
	}
};

export const getFormattedDate = (date: Date | null | string) => {
	if (!date) {
		return '';
	}

	if (typeof date === 'string') {
		return '';
	}

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
	const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
	const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
	const timeString = `${hoursString}:${minutesString}:${secondsString}`;
	const dateString = `${day}/${month}/${year}`;
	return `${dateString} ${timeString}`;
};

export const getTaskFromTaskUrl = (tasks: Task[], taskUrl: string) => {
	const task = tasks.find((task) => task.url === taskUrl);
	return task;
};

export const getHebrewUrlStringFromHebrewUrl = (hebrewUrl: string) => {
	// example of hebrewUrl: %D7%9C%D7%A9%D7%9C%D7%95%D7%97-%D7%9C%D7%A9%D7%97%D7%A8-%D7%90%D7%AA-%D7%94%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA--23
	// example of exepted result: לשלוח-לשחר-את-ההקלטות--23

	const hebrewToAsciiMap: { [key: string]: string } = {
		א: '%D7%90',
		ב: '%D7%91',
		ג: '%D7%92',
		ד: '%D7%93',
		ה: '%D7%94',
		ו: '%D7%95',
		ז: '%D7%96',
		ח: '%D7%97',
		ט: '%D7%98',
		י: '%D7%99',
		כ: '%D7%9B',
		ל: '%D7%9C',
		מ: '%D7%9E',
		נ: '%D7%A0',
		ס: '%D7%A1',
		ע: '%D7%A2',
		פ: '%D7%A4',
		צ: '%D7%A6',
		ק: '%D7%A7',
		ר: '%D7%A8',
		ש: '%D7%A9',
		ת: '%D7%AA',
		ם: '%D7%9D',
		ן: '%D7%9F',
		ף: '%D7%A3',
		ץ: '%D7%A5',
	};

	const getKeyByValue = (object: any, value: any) => {
		return Object.keys(object).find((key) => object[key] === value);
	};

	let result = '';
	let currentIndex = 0;

	while (currentIndex < hebrewUrl.length) {
		if (hebrewUrl[currentIndex] === '%') {
			const hebrewLetter = hebrewUrl.slice(currentIndex, currentIndex + 6); // example: %D7%9C
			const asciiLetter = getKeyByValue(hebrewToAsciiMap, hebrewLetter); // example: ל
			result += asciiLetter;
			currentIndex += 6;
		} else {
			result += hebrewUrl[currentIndex];
			currentIndex += 1;
		}
	}

	return result;
};

export const isExistAndNotEmpty = (value: any) => {
	let bool = false;
	if (value) {
		if (Array.isArray(value)) {
			bool = value.length > 0;
		} else if (typeof value === 'string') {
			bool = value.length > 0;
		} else if (typeof value === 'object') {
			bool = Object.keys(value).length > 0;
		} else if (typeof value === 'number') {
			bool = true;
		}
	}
	return bool;
};
