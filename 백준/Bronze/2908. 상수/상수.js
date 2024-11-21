const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = Number(input[0].split("").reverse().join(""));
const B = Number(input[1].split("").reverse().join(""));

console.log(Math.max(A, B));
