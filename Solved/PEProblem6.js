// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares(x) {
  let sum1 = 0;
  let sum2 = 0;
  for (i = 1; i <= x; i++) {
    sum1 += i * i;
    sum2 += i;
  }
  return sum2 * sum2 - sum1;
}

console.log(sumOfSquares(100));
