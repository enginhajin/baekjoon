const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

console.log(N * N - N);
