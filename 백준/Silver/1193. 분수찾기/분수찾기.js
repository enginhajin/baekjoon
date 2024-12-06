const fs = require("fs");
const X = Number(fs.readFileSync("/dev/stdin").toString().trim());

let diagonal = 0;
let sum = 0;

while (sum < X) {
  diagonal++;
  sum += diagonal;
}

const position = X - (sum - diagonal);

const numerator = diagonal % 2 === 0 ? position : diagonal - (position - 1);
const denominator = diagonal % 2 === 0 ? diagonal - (position - 1) : position;

console.log(`${numerator}/${denominator}`);
