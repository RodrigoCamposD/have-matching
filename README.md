# install

```bash
npm install have-matching
```

## Use

```javascript
const haveMatching = require("../haveMatching");
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

haveMatching("test8", "testa8", {
    orderMatter: true,
    onlyNumbers: true,
    caseSensitive: true,
    onlyLetters: true,
  })
); // true
```
