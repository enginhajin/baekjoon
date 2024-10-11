const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString()); //

const result = Array.from({ length: num }, (_, idx) => idx + 1).join("\n");

console.log(result);
