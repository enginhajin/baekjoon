const fs = require("fs");
const [A, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log(String(A + B));
