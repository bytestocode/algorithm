const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_N = +require("fs").readFileSync(filePath).toString().trim();

let box5kg;
let box3kg;

function calcBoxNum(totalKg) {
  box5kg = Math.floor(totalKg / 5);
  for (let i = 0; ; i++) {
    if ((totalKg - box5kg * 5) % 3 === 0) {
      box3kg = (totalKg - box5kg * 5) / 3;
      return box5kg + box3kg;
    }
    if (box5kg === 0) {
      return -1;
    }
    box5kg -= 1;
  }
}

console.log(calcBoxNum(INPUT_N));
