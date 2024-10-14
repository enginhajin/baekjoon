const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sumResult = a + b - c;
const strResult = String(a) + String(b) - String(c);

console.log(sumResult, strResult);
