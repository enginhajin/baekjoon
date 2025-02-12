const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const isAnagram = (A, B) => {
  if (A.length !== B.length) {
    return false;
  } else {
    return A.split("").sort().join("") === B.split("").sort().join("");
  }
};

data.forEach((item) => {
  const [A, B] = item.split(" ");

  console.log(
    isAnagram(A, B)
      ? `${A} & ${B} are anagrams.`
      : `${A} & ${B} are NOT anagrams.`
  );
});