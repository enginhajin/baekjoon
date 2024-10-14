const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxNum = Math.max(...nums);
const order = nums.indexOf(maxNum) + 1;

console.log(maxNum);
console.log(order);
