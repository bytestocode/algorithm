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

/*const inputArr = ["2", "3 ABC", "5 /HTP"];

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

console.log(result.trim());*/

// import fs from "fs";
// const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//
// const readline = require("readline");
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// let inputArr = [];
//
// rl.on("line", function (line) {
//   inputArr.push(line);
// }).on("close", function () {
//   const N = +inputArr[0];
//   let result = "";
//
//   for (let i = 1; i <= N; i++) {
//     const problemArr = inputArr[i].split(" ");
//     const problemN = +problemArr[0];
//     const problemText = problemArr[1];
//     const problemTextArray = problemText.split("");
//
//     problemTextArray.forEach((char) => {
//       for (let i = 0; i < problemN; i++) {
//         result += char;
//       }
//     });
//     result += "\n";
//   }
//
//   console.log(totalResult.trim());
//   process.exit();
// });
