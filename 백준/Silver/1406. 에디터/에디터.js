const fs = require("fs");
const [val, M, ...cmds] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const leftStack = [...val];
const rightStack = [];

cmds.forEach((item) => {
  const [cmd, str] = item.split(" ");

  switch (cmd) {
    case "L":
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
      break;
    case "D":
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
      break;
    case "B":
      if (leftStack.length > 0) {
        leftStack.pop();
      }
      break;
    case "P":
      leftStack.push(str);
      break;
  }
});

console.log(leftStack.join("") + rightStack.reverse().join(""));
