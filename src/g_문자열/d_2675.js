import fs from "fs";

const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +inputArr[0];
let result = "";

for (let i = 1; i <= N; i++) {
  const [problemN, problemText] = inputArr[i].split(" ");
  const problemTextArray = problemText.split("");

  problemTextArray.forEach((char) => {
    for (let j = 0; j < problemN; j++) {
      result += char;
    }
  });

  result += "\n";
}

console.log(result.trim());
// 오답
