const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const subjectCount = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const maxScore = Math.max(...scores);
const newScores = scores.map((item) => (item / maxScore) * 100);
const avg = newScores.reduce((acc, curr) => acc + curr) / subjectCount;

console.log(avg);
