/**
 * Compare two values with various paramaters.
 * @param {string | number} value1 fisrt value that will be compared
 * @param {string | number | array} value2 other value(s) to compare
 * @param {boolean} [caseSensitive = false] if is set "test" === "tesT" -> false
 * @param {boolean} [onlyLetters = false] if is set "test === "/test 8" -> true
 * @param {boolean} [onlyNumbers = false] "8899" === "9988" -> true
 * @param {boolean} [orderMatter = false] "abc" === "bca" -> false
 * @returns {boolean} True if matches any or false if dont.
 * @link
 */
const haveMatching = function (
  value1,
  value2,
  {
    caseSensitive = false,
    onlyLetters = false,
    onlyNumbers = false,
    orderMatter = false,
  } = {}
) {
  let val1;
  let val2;
  let regEx;

  if (onlyLetters && onlyNumbers) regEx = /[^a-zA-Z0-9]/g;
  else if (onlyLetters) regEx = /[^a-zA-Z]/g;
  else if (onlyNumbers) regEx = /[^0-9]/g;

  const prepareValue = (value) =>
    !caseSensitive ? value.toString().toUpperCase() : value.toString();

  const applyRegex = (value) => value.replace(regEx, "");

  const sortString = (value) => [...value].sort().join("");

  val1 = applyRegex(prepareValue(value1));
  val1 = orderMatter ? val1 : sortString(val1);

  if (Array.isArray(value2)) {
    let response = false;
    val2 = value2.map((el) => applyRegex(prepareValue(el)));
    val2.forEach((el) => {
      if (val1 === (orderMatter ? el : sortString(el))) response = true;
    });
    return response;
  } else {
    val2 = applyRegex(prepareValue(value2));
    val2 = orderMatter ? val2 : sortString(val2);
    return val1 === val2;
  }
};

module.exports = haveMatching;
