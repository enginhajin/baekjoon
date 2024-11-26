const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const words = input.map((line) => line.split(""));

const maxLength = Math.max(...input.map((item) => item.length));
const result = Array(maxLength).fill("");

words.forEach((word) => {
  word.forEach((item, idx) => {
    result[idx] += item;
  });
});

console.log(result.join(""));
