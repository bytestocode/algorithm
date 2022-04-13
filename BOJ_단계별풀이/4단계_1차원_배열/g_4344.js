const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

for (let i = 1; i < N + 1; i++) {
  let scoreArr = input[i].split(" ");
  let sum = 0;
  let average;
  let averageRatio;
  let highScoreStudent = 0;

  for (let j = 1; j < scoreArr.length; j++) {
    sum += +scoreArr[j];
  }

  average = sum / (scoreArr.length - 1);

  for (let j = 1; j < scoreArr.length; j++) {
    if (scoreArr[j] > average) highScoreStudent += 1;
  }

  averageRatio = ((highScoreStudent / (scoreArr.length - 1)) * 100).toFixed(3);

  console.log(`${averageRatio}%`);
}
