const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

let result;

if (A > B) {
  result = ">";
} else if (A < B) {
  result = "<";
} else {
  result = "==";
}

console.log(result);
