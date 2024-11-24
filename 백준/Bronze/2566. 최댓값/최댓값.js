const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let max = -1;
let row = 0;
let col = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (nums[i][j] > max) {
      max = nums[i][j];
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max);
console.log(row, col);
