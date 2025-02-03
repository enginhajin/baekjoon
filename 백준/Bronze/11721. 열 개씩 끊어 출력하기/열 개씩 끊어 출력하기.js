const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < data.length; i += 10) {
  console.log(data.slice(i, i + 10));
}
