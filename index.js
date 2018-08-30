const reverse = require("esrever").reverse;

/**
	* Checks if a string is palindromic.
	* @param {string} string The string to check.
	* @param {boolean} caseSensitive Whether to consider different casing as not palindromic.
	* @returns {boolean}
*/
module.exports = (string, caseSensitive = true) => {
	const casedStr = caseSensitive ? string : string.toLowerCase();
	return casedStr === reverse(casedStr);
};
