const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

data.forEach((item) => {
  const val = item.toUpperCase().trim();
  let reversed = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reversed += val[i];
  }

  console.log(val === reversed ? "Yes" : "No");
});
