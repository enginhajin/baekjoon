const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const words = [...new Set(input)];

words.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

console.log(words.join("\n"));
