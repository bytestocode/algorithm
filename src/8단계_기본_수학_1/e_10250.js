const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const INPUT_ARR = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const INPUT_COUNT = +INPUT_ARR[0];

let problemArr;
let H;
let W;
let N;

for (let i = 1; i < INPUT_COUNT + 1; i++) {
  problemArr = INPUT_ARR[i].split(" ");

  H = +problemArr[0];
  W = +problemArr[1];
  N = +problemArr[2];

  let floor;
  let roomNumber;

  if (N % H) {
    floor = N % H;
    roomNumber = Math.floor(N / H) + 1;
  } else {
    floor = H;
    roomNumber = Math.floor(N / H);
  }

  roomNumber = roomNumber < 10 ? "0" + roomNumber : roomNumber;
  console.log("" + floor + roomNumber);
}
