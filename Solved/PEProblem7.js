// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function getPrimeNumber(x) {
  const primeNumbers = [];
  while (primeNumbers.length < 10001) {}
  return primeNumbers;
}

function findLCD(x, y = 2) {
  if (x === 1) {
    return 1;
  } else if (x % y === 0) {
    return y;
  } else {
    return findLCD(x, y + 1);
  }
}

// Use prime # sieve!!!
