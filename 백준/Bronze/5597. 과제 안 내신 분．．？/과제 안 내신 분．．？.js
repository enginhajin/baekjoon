const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const totalNums = Array.from({ length: 30 }, (_, idx) => idx + 1);
const notIncludeNums = totalNums.filter((num) => !nums.includes(num));

console.log(notIncludeNums.join("\n"));
