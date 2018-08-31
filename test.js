/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const isPalindromic = require(".");

const casedPalin = "abcCBA";

describe(`case-sensitive option`, function () {
	it("does not accept cased palindrome when unspecified", function () {
		assert.strictEqual(isPalindromic(casedPalin, true), false);
	});
	it("does not accept cased palindrome when on", function () {
		assert.strictEqual(isPalindromic(casedPalin, true), false);
	});
	it("does accept cased palindrome when off", function () {
		assert.strictEqual(isPalindromic(casedPalin, false), true);
	});
});
