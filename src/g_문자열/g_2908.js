const fs = require("fs");
const questionNum = fs.readFileSync("/dev/stdin").toString().trim();
const qNumArr = questionNum.split(" ");

function reverseNum(number) {
  const hundredsNum = Math.floor(number / 100);
  const tensNum = Math.floor((number - hundredsNum * 100) / 10);
  const unitsNum = Math.floor(number - hundredsNum * 100 - tensNum * 10);

  return unitsNum * 100 + tensNum * 10 + hundredsNum;
}

const firstNum = reverseNum(+qNumArr[0]);
const secondNum = reverseNum(+qNumArr[1]);

console.log(Math.max(firstNum, secondNum));
