const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = (nums) => {
  return nums.reduce((sum, num) => sum + num ** 2, 0) % 10;
};

console.log(result(nums));
