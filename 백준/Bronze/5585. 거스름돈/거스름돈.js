const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const coins = [500, 100, 50, 10, 5, 1];

let change = 1000 - N;
let count = 0;

for (const coin of coins) {
  count += Math.floor(change / coin);
  change %= coin;
}

console.log(count);
