const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

data.forEach((item, idx) => {
  if (idx === data.length - 1) return;
  const [L, P, V] = item.split(" ").map(Number);

  const quot = Math.floor(V / P);
  const rest = V % P > L ? L : V % P;
  console.log(`Case ${idx + 1}: ${quot * L + rest}`);
});
