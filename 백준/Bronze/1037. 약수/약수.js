const fs = require("fs");
const factors = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

const max = Math.min(...factors);
const min = Math.max(...factors);

console.log(max * min);
