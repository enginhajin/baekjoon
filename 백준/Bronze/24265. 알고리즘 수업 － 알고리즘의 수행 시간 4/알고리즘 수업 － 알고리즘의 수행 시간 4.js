const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin"));

console.log((n * (n - 1)) / 2);
console.log(2);