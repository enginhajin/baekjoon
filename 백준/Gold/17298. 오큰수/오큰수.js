const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(data[0]);
const nums = data[1].split(" ").map(Number);
const stack = [];
const result = Array(N).fill(-1);

nums.forEach((num, idx) => {
  while (stack.length && num > nums[stack.at(-1)]) {
    result[stack.pop()] = num;
  }
  stack.push(idx);
});

console.log(result.join(" "));
