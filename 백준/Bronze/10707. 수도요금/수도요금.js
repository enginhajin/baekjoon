const fs = require("fs");
const [A, B, C, D, P] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const X = P * A;
const Y = P <= C ? B : B + (P - C) * D;

console.log(Math.min(X, Y));