const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = nums.reduce((acc, curr) => (acc += curr));
const target = sum - 100;

let exclude = [];

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      exclude = [nums[i], nums[j]];
      break;
    }
  }
}

const result = nums
  .filter((item) => !exclude.includes(item))
  .sort((a, b) => a - b);

console.log(result.join("\n"));
