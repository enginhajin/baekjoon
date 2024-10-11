const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const string = input[0];
const idx = Number(input[1]) - 1;
const result = string[idx];

console.log(result);
