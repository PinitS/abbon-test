const _ = require("lodash");

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
