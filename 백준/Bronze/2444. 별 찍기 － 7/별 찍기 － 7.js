const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

for (let i = 1; i <= 2 * N - 1; i++) {
  if (i <= N) {
    const space = " ".repeat(N - i);
    const star = "*".repeat(i * 2 - 1);
    console.log(space + star);
  } else {
    const space = " ".repeat(i - N);
    const star = "*".repeat((2 * N - i) * 2 - 1);
    console.log(space + star);
  }
}
