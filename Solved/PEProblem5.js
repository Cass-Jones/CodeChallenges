// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const { performance } = require("perf_hooks");

let startTime;
function smallestMultiple(x) {
  startTime = performance.now();
  let currentSmallest = x;
  for (i = 1; i < x; i++) {
    if (currentSmallest % i !== 0) {
      currentSmallest *= findLCD(i);
    }
  }
  return currentSmallest;
}

function findLCD(x, y = 2) {
  if (x % y === 0) {
    return y;
  } else {
    return findLCD(x, y + 1);
  }
}

//Testing smallestMultiple func
console.log(
  smallestMultiple(30),
  `Executed in ${performance.now() - startTime}`
);
