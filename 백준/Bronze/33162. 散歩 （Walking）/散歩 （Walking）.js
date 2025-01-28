const fs = require("fs");
const X = Number(fs.readFileSync("/dev/stdin"));

let result = 0;

for (let i = 1; i <= X; i++) {
  if (i % 2 === 0) {
    result -= 2;
  } else {
    result += 3;
  }
}

console.log(result);