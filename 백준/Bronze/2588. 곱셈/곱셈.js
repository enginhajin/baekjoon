const fs = require("fs");
const [A, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

B.toString()
  .split("")
  .reverse()
  .forEach((item) => console.log(A * item));

console.log(A * B);
