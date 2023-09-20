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
