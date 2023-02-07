const haveMatching = require("../have-matching");

console.log("01", haveMatching("test", "tSet5")); // false
console.log("02", haveMatching("t5est", "tSet5")); // true
console.log("03", haveMatching(889, "988")); // true
console.log("04", haveMatching("test", "tSet/8", { onlyLetters: true })); // true
console.log("05", haveMatching("test", "tSet8", { onlyNumbers: true })); // false
console.log("06", haveMatching("abc889", "98xyz8", { onlyNumbers: true })); // true
console.log("07", haveMatching("test", "tesT", { caseSensitive: true })); // false
console.log(
  "08",
  haveMatching("test8", "tSe8t//.", {
    onlyNumbers: true,
    onlyLetters: true,
  })
); // true
console.log("09", haveMatching("test", ["te", "st"])); // false
console.log("10", haveMatching("test", ["tSet", "st"])); // true
console.log("11", haveMatching(8, ["88", "test"])); // false
console.log("12", haveMatching("test", "Test", { orderMatter: true })); // true

console.log(
  "13",
  haveMatching("test8", "testa8", {
    orderMatter: true,
    onlyNumbers: true,
    caseSensitive: true,
    onlyLetters: true,
  })
); // true

// onlyNumbers set to true alone will only check for numbers in the string
// if you want to check also letters set onlyLetters to true
// if you want to check everything just dont use any paramater
