const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_ARR = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const A = +INPUT_ARR[0];
const B = +INPUT_ARR[1];
const V = +INPUT_ARR[2];

console.log(Math.ceil((V - B) / (A - B)));
