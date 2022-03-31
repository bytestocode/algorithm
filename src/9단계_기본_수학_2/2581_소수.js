const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_ARR = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let result = [];
for (let i = +INPUT_ARR[0]; i < +INPUT_ARR[1] + 1; i++) {
  if (i === 1) continue;
  result.push(i);
}

for (let i = 2; i < +INPUT_ARR[1]; i++) {
  result = result.filter((num) => !(num % i === 0 && num / i >= 2));
}

const sum = result.reduce((acc, cur) => acc + cur, 0);

console.log(result);

if (sum !== 0) {
  console.log(sum);
  console.log(result[0]);
} else {
  console.log(-1);
}
