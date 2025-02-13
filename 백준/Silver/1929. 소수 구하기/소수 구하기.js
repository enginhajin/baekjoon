const fs = require("fs");
const [M, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const result = [];

for (let i = M; i <= N; i++) {
  if (isPrime(i)) result.push(i);
}

console.log(result.join("\n"));