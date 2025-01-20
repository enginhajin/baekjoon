const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = 0;
let curr = 0;

data.forEach((item) => {
  const [outNum, inNum] = item.split(" ").map(Number);
  curr = curr - outNum + inNum;
  max = Math.max(max, curr);
});

console.log(max);
