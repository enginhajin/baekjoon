const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const stack = [];
const result = [];
let count = 1;
let isPossible = true;

for (const num of data) {
  while (count <= num) {
    stack.push(count);
    result.push("+");
    count++;
  }

  if (stack[stack.length - 1] === num) {
    stack.pop();
    result.push("-");
  } else {
    isPossible = false;
    break;
  }
}

console.log(isPossible ? result.join("\n") : "NO");