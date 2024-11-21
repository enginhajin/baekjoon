const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const counts = new Array(26).fill(0);
let max = 0;
let maxCount = 0;
let maxIndex = -1;

for (const char of input) {
  const idx = char.charCodeAt(0) - 65;
  counts[idx]++;

  if (counts[idx] > max) {
    max = counts[idx];
    maxCount = 1;
    maxIndex = idx;
  } else if (counts[idx] === max) {
    maxCount++;
  }
}

if (maxCount > 1) {
  console.log("?");
} else {
  console.log(String.fromCharCode(maxIndex + 65));
}