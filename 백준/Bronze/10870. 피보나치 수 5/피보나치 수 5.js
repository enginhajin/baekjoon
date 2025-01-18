const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let prev = 0,
  curr = 1;

for (let i = 2; i <= N; i++) {
  [prev, curr] = [curr, prev + curr];
}

console.log(N ? curr : 0);
