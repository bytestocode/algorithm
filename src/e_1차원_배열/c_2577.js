const fs = require("fs");

const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let productNum = 1;
inputArr.map((inputNum) => (productNum *= +inputNum));

let productArr = (productNum + "").split("");

for (let i = 0; i < 10; i++) {
  let output = productArr.filter((num) => +num === i).length;
  console.log(output);
}
