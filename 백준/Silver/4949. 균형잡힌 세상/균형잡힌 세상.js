const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

const result = [];

data.forEach((item) => {
  const stack = [];
  let isValied = true;

  for (const char of item) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        isValied = false;
        break;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        isValied = false;
        break;
      }
    }
  }
  isValied && !stack.length ? result.push("yes") : result.push("no");
});

console.log(result.join("\n"));
