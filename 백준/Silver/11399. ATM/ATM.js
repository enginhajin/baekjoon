const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(data[0]);
const nums = data[1].split(" ").map(Number);

nums.sort((a, b) => a - b);

let result = nums[0];

for (let i = 1; i < N; i++) {
  let sum = 0;
  for (let j = 0; j <= i; j++) {
    sum += nums[j];
  }
  result += sum;
}

console.log(result);
