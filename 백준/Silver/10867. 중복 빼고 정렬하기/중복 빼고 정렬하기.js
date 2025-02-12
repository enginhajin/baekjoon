const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = [...new Set(data[1].split(" ").map(Number))];
nums.sort((a, b) => a - b);

console.log(nums.join(" "));
