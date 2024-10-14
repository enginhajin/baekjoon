const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const product = String(a * b * c)
  .split("")
  .map(Number);
const result = Array(10).fill(0);

product.forEach((item) => {
  result[item]++;
});

result.forEach((count) => {
  console.log(count);
});
