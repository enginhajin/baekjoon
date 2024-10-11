const fs = require("fs");
const [n, nums, v] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numsArray = nums.trim().split(" ").map(Number);

let result = 0;
numsArray.forEach((item) => {
  if (item === Number(v)) result += 1;
});

console.log(result);
