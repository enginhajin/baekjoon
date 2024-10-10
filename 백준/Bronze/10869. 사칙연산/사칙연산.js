const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.trunc(a / b));
console.log(a % b);
