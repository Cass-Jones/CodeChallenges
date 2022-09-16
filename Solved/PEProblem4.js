// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function initiator() {
  let max = 99;
  let min = 10;

  let pals = findFirstPalindrome(max, min);
  let theONE = [];
  pals.forEach((pal) => {
    for (let i = max; i >= min; i--) {
      if (pal % i === 0 && pal / i > min && pal / i < max) {
        theONE.push(pal);
      }
    }
  });
  return theONE[0];
}

function findFirstPalindrome(x, y) {
  let pal = [];
  let startingNumber = x * x;
  for (let i = startingNumber; i > y * y; i--) {
    if (isItPalindrome(i)) {
      pal.push(i);
    }
  }
  return pal;
}

function isItPalindrome(x) {
  let reversed = x.toString().split("").reverse().join("");
  return x === parseInt(reversed);
}

// Test palindrome
// console.log(isItPalindrome(9009));

// console.log(findFirstPalindrome(999, 999, 100, 100));

console.log(initiator());
