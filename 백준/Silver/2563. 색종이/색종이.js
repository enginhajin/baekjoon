const fs = require("fs");
const positions = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((item) => item.split(" ").map(Number));

const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

positions.forEach(([x, y]) => {
  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      paper[i][j] = 1;
    }
  }
});

const blackArea = paper.flat().filter((item) => item === 1).length;

console.log(blackArea);
