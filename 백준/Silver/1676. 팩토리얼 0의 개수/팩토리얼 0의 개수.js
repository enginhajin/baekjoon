const fs = require("fs");
let num = Number(fs.readFileSync("/dev/stdin"));
let count = 0;

while (num > 0) {
  num = Math.floor(num / 5);
  count += num;
}

console.log(count);