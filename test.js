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

const merge2ArraySortedList = (arr1, arr2) => {
  const merge = _.chain(arr1).concat(arr2).sort().value();
  return merge;
};

console.log(
  "Merge 2 Sorted List case 1 :>> ",
  merge2ArraySortedList([1, 2, 4], [1, 3, 4])
);
console.log("Merge 2 Sorted List case 2 :>> ", merge2ArraySortedList([], []));
console.log("Merge 2 Sorted List case 3 :>> ", merge2ArraySortedList([], [0]));
console.log("============================================= :>> ");

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
  const closeBucket = _.chain(bucketType)
    .values()
    .map((item) => {
      return _.get(item, ["close"]);
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

const validatePrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = (limit) => {
  let primes = [];
  let num = 2;
  while (_.size(primes) < limit) {
    if (validatePrimeNumber(num)) {
      primes = _.concat(primes, num);
    }
    num++;
  }
  return primes;
};

console.log("primeNumber case 3 :>> ", primeNumber(3));
console.log("primeNumber case 3 :>> ", primeNumber(8));
