const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let prev = 0;
let curr = 0;

for (let i = 0; i < nums.length; i++) {
  const val = prev + nums[i];
  curr = val;
  if (val >= 100) {
    break;
  } else {
    prev += nums[i];
  }
}

console.log(Math.abs(prev - 100) >= curr - 100 ? curr : prev);
