const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputScoreArr = input[1].split(" ");
const MAX = Math.max(...inputScoreArr);

let fakeScoreArr = inputScoreArr.map((score) => (+score / MAX) * 100);

let fakeAverage =
  fakeScoreArr.reduce((pre, cur) => pre + cur) / fakeScoreArr.length;

console.log(fakeAverage);
