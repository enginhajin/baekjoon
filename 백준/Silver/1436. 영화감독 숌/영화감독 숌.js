const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin"));

let count = 1;
let num = 666;

while (count < input) {
  num++;
  if (String(num).includes("666")) {
    count++;
  }
}

console.log(num);
