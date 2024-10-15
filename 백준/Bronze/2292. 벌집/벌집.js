const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin"));

let count = 1;
let sum = 1;

while (num > sum) {
  sum += 6 * count;
  count++;
}

console.log(count);
