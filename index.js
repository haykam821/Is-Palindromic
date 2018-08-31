var reverse = require("esrever").reverse;

/**
	* Checks if a string is palindromic.
	* @param {string} string The string to check.
	* @param {boolean} caseSensitive Whether to consider different casing as not palindromic.
	* @returns {boolean}
*/
module.exports = function isPalindromic(string, caseSensitive) => {
	if (caseSensitive || caseSensitive === undefined) {
		return string.toLowerCase() === reverse(casedStr);
	} else {
		return string === reverse(casedStr);
	}
};
