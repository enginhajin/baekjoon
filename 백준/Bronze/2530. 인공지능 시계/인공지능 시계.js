const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, C] = data[0].split(" ").map(Number);
const D = Number(data[1]);

let total = A * 3600 + B * 60 + C + D;

const h = Math.floor(total / 3600) % 24;
const m = Math.floor((total % 3600) / 60);
const s = total % 60;

console.log(h, m, s);
