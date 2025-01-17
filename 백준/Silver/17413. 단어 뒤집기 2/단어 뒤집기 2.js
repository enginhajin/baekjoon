const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim();

const result = [];
let stack = [];
let inTag = false;

for (const char of data) {
  if (char === "<") {
    inTag = true;
    result.push(stack.reverse().join(""));
    stack = [];
    result.push(char);
  } else if (char === ">") {
    inTag = false;
    result.push(char);
  } else if (inTag) {
    result.push(char);
  } else if (char === " ") {
    result.push(stack.reverse().join(""));
    result.push(" ");
    stack = [];
  } else {
    stack.push(char);
  }
}

if (stack.length) {
  result.push(stack.reverse().join(""));
}

console.log(result.join(""));
