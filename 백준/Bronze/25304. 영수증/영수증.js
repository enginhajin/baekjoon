const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const X = Number(input[0]);
const N = Number(input[1]);
const items = input.splice(2);

let total = 0;
items.forEach((item, idx) => {
  const [price, count] = item.split(" ").map(Number);
  total += price * count;
});

console.log(X === total ? "Yes" : "No");
