const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(Number);

const stack = [];

data.forEach((item) => {
  if (item === 0) {
    stack.pop();
  } else {
    stack.push(item);
  }
});

console.log(stack.reduce((acc, curr) => acc + curr, 0));