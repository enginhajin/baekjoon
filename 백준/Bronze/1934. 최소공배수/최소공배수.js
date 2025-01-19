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
  const [a, b] = item.split(" ").map(Number);
  result.push((a * b) / getGCD(a, b));
});

console.log(result.join("\n"));
