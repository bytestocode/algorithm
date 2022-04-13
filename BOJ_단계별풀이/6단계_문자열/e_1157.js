import fs from "fs";

const charList = fs.readFileSync("/dev/stdin").toString().trim();
const upperCharList = charList.toUpperCase().split("");
let countList = [];

for (let i = 65; i <= 90; i++) {
  const alphabet = String.fromCharCode(i);
  let count = 0;
  upperCharList.forEach((char) => {
    char === alphabet ? (count += 1) : null;
  });
  countList.push(count);
}

const maxNum = Math.max(...countList);

let duplicated = 0;

countList.forEach((char) => {
  char === maxNum ? (duplicated += 1) : null;
});

duplicated === 1 ? console.log(maxNum) : console.log("?");
