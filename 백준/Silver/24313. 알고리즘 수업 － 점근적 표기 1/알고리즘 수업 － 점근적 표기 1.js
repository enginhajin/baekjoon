const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a1, a0] = data[0].split(" ").map(Number);
const c = Number(data[1]);
const n0 = Number(data[2]);

const fn = a1 * n0 + a0;
const gn = c * n0;

if (a1 > c) {
  console.log(0);
} else {
  if (fn <= gn) {
    console.log(1);
  } else {
    console.log(0);
  }
}
