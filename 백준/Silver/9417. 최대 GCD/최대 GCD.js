const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const getGCD = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};

const result = [];

data.forEach((item) => {
  const nums = item.split(" ").map(Number);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, getGCD(nums[i], nums[j]));
    }
  }

  result.push(max);
});

console.log(result.join("\n"));