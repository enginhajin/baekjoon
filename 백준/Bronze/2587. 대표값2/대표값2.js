const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const average = data.reduce((acc, curr) => acc + curr, 0) / data.length;
const median = data.sort((a, b) => a - b)[Math.floor(data.length / 2)];

console.log(average);
console.log(median);
