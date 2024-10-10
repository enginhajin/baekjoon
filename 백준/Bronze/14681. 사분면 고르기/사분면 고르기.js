const fs = require("fs");
const [x, y] = fs
  .readFileSync(0)
  .toString()
  .split("\n")
  .map(Number);

let result = 1;

if (x < 0) {
  if (y > 0) {
    result = 2;
  } else {
    result = 3;
  }
} else {
  if (y > 0) {
    result = 1;
  } else {
    result = 4;
  }
}

console.log(result);
