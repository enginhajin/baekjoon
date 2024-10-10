const fs = require("fs");
const x = Number(fs.readFileSync("/dev/stdin").toString()); 

if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
