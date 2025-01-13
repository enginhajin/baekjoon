const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

let quotient5 = Math.floor(N / 5);
let result = -1;

while (quotient5 >= 0) {
  const remainder5 = N - quotient5 * 5;
  if (remainder5 % 3 === 0) {
    const quotient3 = remainder5 / 3;
    result = quotient5 + quotient3;
    break;
  }
  quotient5--;
}

console.log(result);
