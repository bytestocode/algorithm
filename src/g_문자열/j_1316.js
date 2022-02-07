const fs = require("fs");
const INPUT_ARRAY = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const wordArray = INPUT_ARRAY.splice(1);

function pressWord(word) {
  const wordArr = word.split("");
  const pressedWordArr = wordArr.map((val, i) =>
    val === wordArr[i + 1] ? "" : val
  );
  const pressedWord = pressedWordArr.join("");
  return pressedWord;
}

function isGroupWord(word) {
  const wordArr = word.split("");
  let resultArr = [];
  wordArr.forEach((val) => {
    if (!resultArr.includes(val)) resultArr.push(val);
  });
  if (wordArr.join("") !== resultArr.join("")) {
    return 0;
  } else {
    return 1;
  }
}

let result = 0;
wordArray.forEach((val) => {
  result += +isGroupWord(pressWord(val));
});

console.log(result);
