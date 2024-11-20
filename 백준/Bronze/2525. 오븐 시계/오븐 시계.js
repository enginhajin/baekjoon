const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const C = Number(input[1]);

let hour = A;
let minute = B + C;

if (minute >= 60) {
  hour = hour + Math.floor(minute / 60);
  minute = minute % 60;
  if (hour >= 24) {
    hour = hour % 24;
  }
}

console.log(hour, minute);