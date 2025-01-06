const fs = require("fs");
let n = BigInt(fs.readFileSync("/dev/stdin"));

console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}`);
console.log(3);
