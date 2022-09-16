function sieveOfEratosthenes(x) {
  const numsArray = Array.from({ length: x + 1 }, () => true);
  const primes = [];

  for (i = 2; i <= x; i++) {
    if (numsArray[i]) {
      primes.push(i);

      for (let j = i + i; j <= x; j += i) {
        numsArray[j] = false;
      }
    }
  }
  return primes;
}

console.log(sieveOfEratosthenes(1000000));
