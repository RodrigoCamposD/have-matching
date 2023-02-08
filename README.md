# have-matching

Compare two values with some options.

[![NPM][nodeio-img]][npm-url]

[![Node Version][node-img]][npm-url] [![NPM Version][verion-img]][npm-url] [![NPM Downloads][download-img]][npm-url]

## Install

```bash
npm install have-matching
```

## Usage

```javascript
const haveMatching = require("have-matching");
haveMatching("t5est", "tSet5")); // true
```

## Tests

```bash
npm test
```

## Examples

```javascript
haveMatching("test", "tSet5")); // false
haveMatching("t5est", "tSet5")); // true
haveMatching(889, "988")); // true
haveMatching("test", "tSet/8", { onlyLetters: true })); // true
haveMatching("test", "tSet8", { onlyNumbers: true })); // false
haveMatching("abc889", "98xyz8", { onlyNumbers: true })); // true
haveMatching("test", "tesT", { caseSensitive: true })); // false
haveMatching("test8", "tSe8t//.", {
    onlyNumbers: true,
    onlyLetters: true,
  })
); // true
haveMatching("test", ["te", "st"])); // false
haveMatching("test", ["tSet", "st"])); // true
haveMatching(8, ["88", "test"])); // false
haveMatching("test", "Test", { orderMatter: true })); // true

haveMatching("test8", "test8", {
    orderMatter: true,
    onlyNumbers: true,
    caseSensitive: true,
    onlyLetters: true,
  })
); // true
```

[npm-url]: https://npmjs.org/package/have-matching
[license-url]: https://github.com/RodrigoCamposD/have-matching/blob/main/LICENSE.md
[vulnerabilities-url]: https://snyk.io/advisor/npm-package/have-matching
[libraries-url]: https://libraries.io/npm/have-matching
[nodeio-img]: https://nodei.co/npm/have-matching.png?downloads=true&downloadRank=true&stars=true
[node-img]: https://img.shields.io/node/v/have-matching?style=for-the-badge
[libraries-img]: https://img.shields.io/librariesio/release/npm/have-matching?style=for-the-badge
[quality-img]: https://img.shields.io/npms-io/quality-score/have-matching?style=for-the-badge
[verion-img]: https://img.shields.io/npm/v/have-matching?style=for-the-badge
[download-img]: https://img.shields.io/npm/dt/have-matching?style=for-the-badge
[node-version-img]: https://img.shields.io/node/v/have-matching?style=for-the-badge
[license-img]: https://img.shields.io/npm/l/have-matching?style=for-the-badge
[vulnerabilities-img]: https://img.shields.io/snyk/vulnerabilities/npm/have-matching?style=for-the-badge
