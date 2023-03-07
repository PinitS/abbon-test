const _ = require("lodash");

const validateBucket = (input) => {
  const bucketCollect = [];
  const bucketType = {
    circle: {
      open: "(",
      close: ")",
    },
    square: {
      open: "[",
      close: "]",
    },
    braces: {
      open: "{",
      close: "}",
    },
  };

  const openBucket = _.chain(bucketType)
    .values()
    .map((item) => {
      return _.get(item, ["open"]);
    })
    .value();

  _.forEach(input, (item) => {
    if (_.includes(openBucket, item)) {
      bucketCollect.push(item);
    } else {
      const bucket = _.findKey(bucketType, (findItem) => {
        return _.get(findItem, ["close"]) === item;
      });
      if (_.last(bucketCollect) === _.get(bucketType, [bucket, "open"])) {
        bucketCollect.pop();
      } else {
        bucketCollect.push(item);
      }
    }
  });
  return _.isEmpty(bucketCollect);
};
console.log("validateBucket case 1 :>> ", validateBucket("(){}[]"));
console.log("validateBucket case 2 :>> ", validateBucket("([{}])"));
console.log("validateBucket case 3 :>> ", validateBucket("(}"));
console.log("validateBucket case 4 :>> ", validateBucket("[(])"));
console.log("validateBucket case 5 :>> ", validateBucket("[({})](]"));
console.log("============================================= :>> ");
