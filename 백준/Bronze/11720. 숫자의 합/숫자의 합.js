const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = input[1].split("");

const result = nums.map(Number).reduce((arr, curr) => arr + curr, 0);

console.log(result);
