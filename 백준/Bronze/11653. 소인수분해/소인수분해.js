const fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin"));

const factors = [];
let divisor = 2;

while (divisor <= Math.sqrt(N)) {
  while (N % divisor === 0) {
    factors.push(divisor);
    N /= divisor;
  }
  divisor++;
}

if (N > 1) factors.push(N);

console.log(factors.join("\n"));
