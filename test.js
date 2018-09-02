const ava = require("ava");
const isPalindromic = require(".");

const palin = "racecar";
const casedPalin = "abcCBA";

ava("returns boolean", function (test) {
	test.is(typeof isPalindromic(palin), "boolean");
});

ava("case-sensitive option does not accept cased palindrome when unspecified", function (test) {
	test.is(isPalindromic(casedPalin, true), false);
});
ava("case-sensitive option does not accept cased palindrome when on", function (test) {
	test.is(isPalindromic(casedPalin, true), false);
});
ava("case-sensitive option does accept cased palindrome when off", function (test) {
	test.is(isPalindromic(casedPalin, false), true);
});