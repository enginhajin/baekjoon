const fs = require("fs");
const [N, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let num = N;
const base = B;
let result = "";

while (num > 0) {
  const remainder = num % base;
  const value =
    remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
  result = value + result;
  num = Math.floor(num / base);
}

console.log(result);