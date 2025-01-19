const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

for (let i = N; i >= 4; i--) {
  if ([...String(i)].every((item) => item === "4" || item === "7")) {
    console.log(i);
    break;
  }
}
