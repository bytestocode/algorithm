const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_ARR = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

console.log(
  INPUT_ARR.reduce((pre, cur) => BigInt(pre) + BigInt(cur)).toString()
);
