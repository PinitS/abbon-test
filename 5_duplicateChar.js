const _ = require("lodash");

const checkDuplicateChar = (str) => {
  const count = _.chain(str)
    .toLower()
    .countBy()
    .filter((item) => {
      return item > 1;
    })
    .size()
    .value();
  return count;
};
console.log("checkDuplicateChar case 1 :>> ", checkDuplicateChar("abcde"));
console.log("checkDuplicateChar case 2 :>> ", checkDuplicateChar("aabbcde"));
console.log("checkDuplicateChar case 3 :>> ", checkDuplicateChar("aabBcde"));
console.log(
  "checkDuplicateChar case 4 :>> ",
  checkDuplicateChar("indivisibility")
);
console.log(
  "checkDuplicateChar case 5 :>> ",
  checkDuplicateChar("Indivisibilities")
);
console.log("checkDuplicateChar case 6 :>> ", checkDuplicateChar("aA11"));
console.log("checkDuplicateChar case 7 :>> ", checkDuplicateChar("ABBA"));
console.log("============================================= :>> ");
