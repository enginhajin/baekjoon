const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const counts = new Array(26).fill(0);

for (const char of input) {
  const idx = char.charCodeAt(0) - 65;
  counts[idx]++;
}

const max = Math.max(...counts);
const maxCount = counts.filter((item) => item === max).length;

if (maxCount > 1) {
  console.log("?");
} else {
  const idx = counts.indexOf(max);
  console.log(String.fromCharCode(idx + 65));
}
