const fs = require("fs");
const [N, seats] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const couple = (seats.match(/LL/g) || []).length;
const holder = Number(N) + 1 - couple;

console.log(Math.min(N, holder));
