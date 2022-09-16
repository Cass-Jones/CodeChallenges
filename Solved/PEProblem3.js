// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?
const { performance } = require("perf_hooks");

let startTime;
function generatePrimeNums(x) {
  startTime = performance.now();
  const primes = [2];
  const primeFactors = [];

  for (let i = 2; i < x / primes[primes.length - 1]; i++) {
    //if I is prime
    if (isItPrime(i, primes)) {
      primes.push(i);
      if (x % i === 0) {
        primeFactors.push(i);
      }
    }
  }

  return primeFactors[primeFactors.length - 1];
}

function isItPrime(x, primes) {
  let isItPrime;
  for (let i = 0; i < primes.length; i++) {
    if (x === primes[i]) {
      isItPrime = true;
      break;
    } else if (x % primes[i] === 0) {
      isItPrime = false;
      break;
    } else isItPrime = true;
  }
  return isItPrime;
}

// Test isItPrime
// console.log(isItPrime(11, [2, 3, 5, 7]));

// Test generatePrimeNums
console.log(
  generatePrimeNums(13195),
  `Executed in ${performance.now() - startTime}`
);
console.log(
  generatePrimeNums(600851475143),
  `Executed in ${performance.now() - startTime}`
);
