const N = 10000;

function d(num) {
  const numArr = num.toString().split("");
  return num + +numArr.reduce((pre, cur) => +pre + +cur);
}

let numGenArr = [];
for (let i = 1; i < N; i++) {
  numGenArr.push(d(i));
}

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let selfNumArr = arr.filter((selfNum) => !numGenArr.includes(selfNum));

selfNumArr.forEach((val) => console.log(val));
