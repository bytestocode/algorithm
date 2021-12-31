const fs = require("fs");
const testcaseArr = fs.readFileSync("/dev/stdin").toString().split("\n");

const testcaseNum = testcaseArr[0];
let result = "";

for (let i = 0; i < testcaseNum; i++) {
  let inputArr = testcaseArr[i + 1].split(" ");
  // console.log(+inputArr[0] + +inputArr[1]);
  result += `${parseInt(inputArr[0]) + parseInt(inputArr[1])}\n`;
}

console.log(result);
