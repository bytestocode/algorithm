const fs = require("fs");
const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const problemNum = inputArr[1];
const problemNumArr = problemNum.split("");

let sum = problemNumArr.reduce((acc, cur) => acc + +cur, 0);

console.log(sum);
