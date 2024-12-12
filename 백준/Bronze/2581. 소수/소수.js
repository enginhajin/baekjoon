const fs = require("fs");
const [M, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const primes = [];

for (let i = M; i <= N; i++) {
  if (i < 2) continue;

  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) primes.push(i);
}

if (primes.length < 1) {
  console.log(-1);
} else {
  const result = primes.reduce((acc, curr) => acc + curr, 0);
  console.log(result);
  console.log(Math.min(...primes));
}
