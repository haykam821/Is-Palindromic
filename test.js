/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const isPalindromic = require(".");

const casedPalin = "abcCBA";

describe(`case-sensitive option`, () => {
	it("does not accept cased palindrome when unspecified", () => {
		assert.strictEqual(isPalindromic(casedPalin, true), false);
	});
	it("does not accept cased palindrome when on", () => {
		assert.strictEqual(isPalindromic(casedPalin, true), false);
	});
	it("does accept cased palindrome when off", () => {
		assert.strictEqual(isPalindromic(casedPalin, false), true);
	});
});
