const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const grades = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalScore = 0;
let totalCredits = 0;

input.forEach((item) => {
  const [_, creditStr, grade] = item.split(" ");
  const credit = Number(creditStr);
  if (grade === "P") return;
  totalScore += credit * grades[grade];
  totalCredits += credit;
});

const avg = totalScore / totalCredits;

console.log(avg.toFixed(6));