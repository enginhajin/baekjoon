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
  const nums = item.split(" ").splice(1).map(Number);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum += getGCD(nums[i], nums[j]);
    }
  }
  result.push(sum);
});

console.log(result.join("\n"));
