const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const result = Array.from({ length: N }, (_, idx) => idx + 1);

input.slice(1).forEach((item) => {
  const [i, j] = item.split(" ").map(Number);
  [result[i - 1], result[j - 1]] = [result[j - 1], result[i - 1]];
});

console.log(result.join(" "));
