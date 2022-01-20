const fs = require("fs");
const S = fs.readFileSync("/dev/stdin").toString().trim();

let result = "";

for (let i = 97; i <= 122; i++) {
  let numToAdd = "-1";
  for (const s of S) {
    if (String.fromCharCode(i) === s) {
      numToAdd = S.indexOf(s);
      break;
    }
  }
  result = result + " " + numToAdd;
}

console.log(result.trim());
