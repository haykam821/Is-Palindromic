# Is Palindromic

[![GitHub release](https://img.shields.io/github/release/haykam821/Is-Palindromic.svg?style=popout&label=github)](https://github.com/haykam821/Is-Palindromic/releases/latest)
[![npm](https://img.shields.io/npm/v/is-palindromic.svg?style=popout&colorB=red)](https://www.npmjs.com/package/is-palindromic)
[![Travis (.com)](https://img.shields.io/travis/com/haykam821/Is-Palindromic.svg?style=popout)](https://travis-ci.com/haykam821/Is-Palindromic)

Checks if a string is palindromic.

## Installation

As the module is available on [npm](https://www.npmjs.com/package/is-palindromic), all you need to do is install it via its name:

    npm install is-palindromic --save

## Usage

Require it in your code like so:

```js
const isPalin = require("is-palindromic");
```

The module exports a single function, which will always return a boolean. Specify your string in the first parameter. By default, it is case-sensitive, but by changing the second parameter to `false`, it will be case-insensitive:

```js
isPalin("abc CBA"); // false
isPalin("abc CBA", true); // false

isPalin("abc CBA", false); // true
```

## Tests

Tests are done via [`ava`](https://github.com/avajs/ava), are stored in [their own file](https://github.com/haykam821/Is-Palindromic/blob/master/test.js), and can be run by the following command:

    npm test

We use [Travis CI](https://travis-ci.com/haykam821/Is-Palindromic) to ensure that the code passes all of its tests.

## Similar Work

This module is similar to [`is-palindrome`](https://github.com/jaredcacurak/is-palindrome), but is *much* simpler, has a case-sensitivity option, and accounts for Unicode
