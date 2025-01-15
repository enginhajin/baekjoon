const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, k] = data[0].split(" ").map(Number);
const scores = data[1].split(" ").map(Number);

scores.sort((a, b) => b - a);

console.log(scores[k - 1]);
