const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [_, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
const numsLength = nums.length;

let maxSum = 0;

for (let i = 0; i < [numsLength - 2]; i++) {
  for (let j = i + 1; j < [numsLength - 1]; j++) {
    for (let k = j + 1; k < [numsLength]; k++) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum <= m) {
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
}

console.log(maxSum);
