const fs = require("fs");
const coords = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

if (Number(coords[0]) === 0) {
  console.log(0);
  return;
}

let minX = Infinity,
  maxX = -Infinity,
  minY = Infinity,
  maxY = -Infinity;

coords.slice(1).forEach((item) => {
  const [x, y] = item.split(" ").map(Number);
  minX = Math.min(minX, x);
  maxX = Math.max(maxX, x);
  minY = Math.min(minY, y);
  maxY = Math.max(maxY, y);
});

console.log((maxX - minX) * (maxY - minY));
