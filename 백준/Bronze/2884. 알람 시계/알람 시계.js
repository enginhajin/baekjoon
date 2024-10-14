const fs = require("fs");
const [hour, minute] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let newHour = hour;
let newMinute = minute - 45;

if (newMinute < 0) {
  newMinute += 60;
  newHour -= 1;
}

if (newHour < 0) {
  newHour = 23;
}

console.log(newHour, newMinute);
