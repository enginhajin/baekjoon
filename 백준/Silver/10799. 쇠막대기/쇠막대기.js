const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("");

const stack = [];
let count = 0;

data.forEach((item, idx) => {
  const prevItem = data[idx - 1];

  if (item === "(") {
    stack.push("(");
  } else {
    stack.pop();
    count += prevItem === "(" ? stack.length : 1;
  }
});

console.log(count);
