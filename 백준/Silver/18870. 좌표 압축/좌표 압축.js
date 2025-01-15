const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const coords = data[1].split(" ").map(Number);
const sorted = [...new Set(coords)].sort((a, b) => a - b);

const valueToRank = {};
sorted.forEach((item, idx) => {
  valueToRank[item] = idx;
});

console.log(coords.map((item) => valueToRank[item]).join(" "));
