const fs = require("fs");
const S = Number(fs.readFileSync("/dev/stdin").toString().trim());

let cnt = 1;
let sum = 1;

while (sum <= S) {
  cnt++;
  sum += cnt;
}

console.log(cnt - 1);
