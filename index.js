var reverse = require("esrever").reverse;

/**
	* Checks if a string is palindromic.
	* @param {string} string The string to check.
	* @param {boolean} caseSensitive Whether to consider different casing as not palindromic.
	* @returns {boolean}
*/
module.exports = function isPalindromic(string, caseSensitive) {
	if (caseSensitive || caseSensitive === undefined) {
		var uncased = string.toLowerCase();
		return uncased === reverse(uncased);
	} else {
		return string === reverse(string);
	}
};
