const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const result = alphabet.map((item) => input.indexOf(item));
console.log(result.join(" "));
