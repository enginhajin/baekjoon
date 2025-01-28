const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arrayA = data[1].split(" ").map(Number);
const arrayB = data[2].split(" ").map(Number);

let result = 0;

arrayA.forEach((A) => {
  arrayB.forEach((B) => {
    result += (A + B) * Math.max(A, B);
  });
});

console.log(result);
