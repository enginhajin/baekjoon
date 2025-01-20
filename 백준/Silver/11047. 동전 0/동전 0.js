const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = data[0].split(" ").map(Number);
const coins = data.slice(1).map(Number);

let count = 0;

for (let i = N - 1; i >= 0; i--) {
  count += Math.floor(K / coins[i]);
  K %= coins[i];
  if (K === 0) break;
}

console.log(count);
