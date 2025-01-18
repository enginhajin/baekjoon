const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let fibonacci = [0, 1];

for (let i = 2; i <= N; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci[N]);
