const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const divisors = [];

for (let i = 1; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    divisors.push(i);
    if (i !== N / i) divisors.push(N / i);
  }
}

divisors.sort((a, b) => a - b);

console.log(divisors[K - 1] || 0);

