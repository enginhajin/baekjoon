const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

const word = "long ";
const count = N / 4;

console.log(`${word.repeat(count)}int`);
