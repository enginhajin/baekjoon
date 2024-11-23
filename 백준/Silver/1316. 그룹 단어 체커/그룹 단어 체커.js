const fs = require("fs");
const words = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let count = 0;

words.forEach((item) => {
  const seen = new Set();
  let isGroupWord = true;

  for (let i = 0; i < item.length; i++) {
    if (seen.has(item[i]) && item[i - 1] !== item[i]) {
      isGroupWord = false;
      break;
    }
    seen.add(item[i]);
  }

  if (isGroupWord) count++;
});

console.log(count);
