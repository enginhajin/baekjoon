const fs = require("fs");
const n = BigInt(fs.readFileSync("/dev/stdin"));

console.log(`${n ** 3n}`);
console.log(3);
