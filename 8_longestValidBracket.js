const _ = require("lodash");

const longestValidBracket = (input) => {
  const bucketCollect = [];
  const bucketType = {
    open: "(",
    close: ")",
  };
  let count = 0;
  _.forEach(input, (item) => {
    if (_.get(bucketType, ["open"]) === item) {
      bucketCollect.push(item);
    } else {
      if (
        !(_.isEmpty(bucketCollect) || _.get(bucketType, ["close"]) !== item)
      ) {
        bucketCollect.pop();
        count += 2;
      }
    }
  });
  return count;
};
console.log("longestValidBracket case 1 :>> ", longestValidBracket("(()"));
console.log("longestValidBracket case 2 :>> ", longestValidBracket(")()()"));
console.log("longestValidBracket case 3 :>> ", longestValidBracket(")()())"));
