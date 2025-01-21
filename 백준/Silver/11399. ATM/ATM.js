const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(data[0]);
const nums = data[1].split(" ").map(Number);

nums.sort((a, b) => a - b);

let result = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += nums[i];
  result += sum;
}

console.log(result);
