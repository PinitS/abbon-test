const _ = require("lodash");

const reverseInteger = (input) => {
  const reverse = _.chain(input)
    .toString()
    .values()
    .reverse()
    .join("")
    .parseInt()
    .value();
  return input < 0 ? reverse * -1 : reverse;
};
console.log("reverseInteger case 1 :>> ", reverseInteger(123));
console.log("reverseInteger case 2 :>> ", reverseInteger(-321));
console.log("reverseInteger case 3:>> ", reverseInteger(120));
console.log("============================================= :>> ");