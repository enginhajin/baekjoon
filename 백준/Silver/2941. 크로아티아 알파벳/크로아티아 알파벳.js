const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

alphabet.forEach((item) => {
  input = input.replaceAll(item, "a");
});

console.log(input.length);
