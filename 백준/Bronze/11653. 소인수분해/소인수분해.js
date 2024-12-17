const fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin"));

const factors = [];
let divisor = 2;

while (N > 1) {
  while (N % divisor === 0) {
    factors.push(divisor);
    N /= divisor;
  }
  divisor++;
}

console.log(factors.join("\n"));
