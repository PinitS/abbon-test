const _ = require("lodash");

const fibonacci = (input) => {
  if (input === 1) {
    return [1];
  }
  let result = [1, 1];
  while (result[_.size(result) - 1] + result[_.size(result) - 2] <= input) {
    const nextResult = result[_.size(result) - 1] + result[_.size(result) - 2];
    result = _.concat(result, nextResult);
  }
  return result;
};

console.log("fibonacci case 1 :>> ", fibonacci(15));
console.log("fibonacci case 2 :>> ", fibonacci(8));
console.log("============================================= :>> ");
