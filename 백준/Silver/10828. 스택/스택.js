const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const stack = [];
const result = [];

data.forEach((item) => {
  const [cmd, val] = item.split(" ");

  switch (cmd) {
    case "push":
      stack.push(val);
      break;
    case "pop":
      result.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length ? 0 : 1);
      break;
    case "top":
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
