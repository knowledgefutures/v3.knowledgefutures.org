/* eslint-disable import/prefer-default-export */

export const capitalize = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const slugifyString = (input) => {
	if (typeof input !== 'string') {
		console.error('input is not a valid string');
		return '';
	}

	return input
		.replace(/ /g, '-')
		.replace(/[^a-zA-Z0-9-]/gi, '')
		.toLowerCase();
};
