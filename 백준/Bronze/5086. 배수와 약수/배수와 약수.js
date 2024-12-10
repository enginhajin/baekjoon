const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

input.forEach((item) => {
  const [A, B] = item.split(" ").map(Number);

  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
