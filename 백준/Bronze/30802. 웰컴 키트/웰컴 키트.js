const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const sizes = input[1].split(" ").map(Number);
const [t, p] = input[2].split(" ").map(Number);

const tUnitCount = sizes.reduce((acc, curr) => acc + Math.ceil(curr / t), 0);
const pUnitCount = Math.floor(n / p);
const pIndiCount = n % p;

console.log(tUnitCount);
console.log(pUnitCount, pIndiCount);
