const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const points = 2 ** N + 1;
const result = points * points;

console.log(result);
