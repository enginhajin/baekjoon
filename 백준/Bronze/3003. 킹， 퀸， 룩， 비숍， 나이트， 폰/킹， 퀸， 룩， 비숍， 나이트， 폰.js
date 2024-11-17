const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const pieces = [1, 1, 2, 2, 2, 8];
const result = nums.map((item, idx) => pieces[idx] - item);

console.log(result.join(" "));
