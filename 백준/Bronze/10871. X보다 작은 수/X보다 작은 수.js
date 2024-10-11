const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const x = input[0].split(" ")[1];
const numbers = input[1].split(" ").map(Number);

const result = numbers.filter((item) => item < x).join(" ");

console.log(result);
