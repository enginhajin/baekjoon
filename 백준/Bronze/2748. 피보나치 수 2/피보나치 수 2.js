const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let prev = BigInt(0),
  curr = BigInt(1);

for (let i = 2; i <= N; i++) {
  [prev, curr] = [curr, prev + curr];
}

console.log(String(N ? curr : 0));
