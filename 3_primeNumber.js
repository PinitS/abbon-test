const _ = require("lodash");

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
