const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cases = input.slice(1);

let result = new Array(N).fill(0);

cases.forEach((item) => {
  const [i, j, k] = item.split(" ").map(Number);
  for (let n = i - 1; n < j; n++) {
    result[n] = k;
  }
});

console.log(result.join(" "));
