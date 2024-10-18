const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const B = input[3].split(" ").map(Number);

const setA = new Set(A);
const result = B.map((item) => (setA.has(item) ? 1 : 0));

console.log(result.join("\n"));
