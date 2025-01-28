const fs = require("fs");
const [N, S, T] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let A = 0;
let B = 0;

for (let i = 0; i < N; i++) {
  if (S[i] === "R") {
    if (T[i] === "P") B += 1;
  } else {
    T[i] === "P" ? (A += 1) : (B += 1);
  }
}

console.log(A, B);
