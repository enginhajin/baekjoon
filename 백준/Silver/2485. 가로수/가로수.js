const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(Number);

const gaps = [];
for (let i = 1; i < data.length; i++) {
  gaps.push(data[i] - data[i - 1]);
}

const getGCD = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};
const gcd = gaps.reduce((acc, curr) => getGCD(acc, curr));

const count = gaps.reduce((acc, curr) => (acc += curr / gcd - 1), 0);

console.log(count);
