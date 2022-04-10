const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const ORDER_NUMBER = +require("fs").readFileSync(filePath).toString().trim();

function findFraction(number) {
  let numerator;
  let denominator;

  let total = 1;
  let sum;

  for (let i = 1; ; i++) {
    if (total >= number) {
      sum = i + 1;

      for (let j = 1; j < sum; j++) {
        if (number - (total - i) === j) {
          numerator = i % 2 ? sum - j : j;
          denominator = i % 2 ? j : sum - j;
          return `${numerator}/${denominator}`;
        }
      }
    } else {
      total = total + i + 1;
    }
  }
}

console.log(findFraction(ORDER_NUMBER));
