const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_ARR = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const CASE_NUM = +INPUT_ARR[0];
const CASE_ARR = INPUT_ARR.slice(1);

function familyNum(k, n) {
  if (k === 0) {
    return n;
  }
  if (n === 1) {
    return 1;
  }

  return familyNum(k - 1, n) + familyNum(k, n - 1);
}

for (let i = 0; i < CASE_NUM; i++) {
  let k = +CASE_ARR[i * 2];
  let n = +CASE_ARR[i * 2 + 1];
  console.log(familyNum(k, n));
}
