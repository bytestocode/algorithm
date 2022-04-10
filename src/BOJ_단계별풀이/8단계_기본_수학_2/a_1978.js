const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_ARR = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const Q_ARR = INPUT_ARR[1].split(" ").map(Number);
let countPrime = 0;

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

Q_ARR.forEach((num) => {
  if (isPrime(num)) countPrime += 1;
});

console.log(countPrime);
