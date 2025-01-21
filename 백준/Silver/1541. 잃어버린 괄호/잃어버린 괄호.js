const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim().split("-");

const cal = data.map((item) => {
  const split = item.split("+").map(Number);
  return split.reduce((acc, curr) => (acc += curr));
});

console.log(cal.reduce((acc, curr) => (acc -= curr)));
