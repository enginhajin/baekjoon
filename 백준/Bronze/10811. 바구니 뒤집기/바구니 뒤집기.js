const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const result = Array.from({ length: N }, (_, idx) => idx + 1);

input.slice(1).forEach((item) => {
  const [i, j] = item.split(" ").map(Number);
  const reversed = result.slice(i - 1, j).reverse();
  result.splice(i - 1, j - i + 1, ...reversed);
});

console.log(result.join(" "));
