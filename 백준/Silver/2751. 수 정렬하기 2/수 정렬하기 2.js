const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

input.sort((a, b) => a - b);

console.log(input.join("\n"));
