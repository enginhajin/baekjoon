const fs = require("fs");
const [a, b, v] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const count = Math.ceil((v - b) / (a - b));

console.log(count);
