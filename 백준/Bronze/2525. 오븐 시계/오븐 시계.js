const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const C = Number(input[1]);

const totalMinutes = A * 60 + B + C;

const hour = Math.floor(totalMinutes / 60) % 24;
const minute = totalMinutes % 60;

console.log(hour, minute);
