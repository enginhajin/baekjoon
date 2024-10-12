const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const calculation = (a, b) => {
  return (a + b) * (a - b);
};

console.log(calculation(a, b));
