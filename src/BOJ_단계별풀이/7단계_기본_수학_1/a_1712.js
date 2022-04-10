const fs = require("fs");
const INPUT_ARRAY = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const FIXED_COST = +INPUT_ARRAY[0];
const COST_PER_UNIT = +INPUT_ARRAY[1];
const REVENUE_PER_UNIT = +INPUT_ARRAY[2];
let breakevenPoint = 0;

function calcBreakevenPoint(fixed, cost, revenue) {
  if (revenue <= cost) return -1;
  let numberSold = 0;
  while ((revenue - cost) * numberSold - fixed <= 0) {
    numberSold += 1;
  }
  return numberSold;
}

breakevenPoint = calcBreakevenPoint(
  FIXED_COST,
  COST_PER_UNIT,
  REVENUE_PER_UNIT
);
console.log(breakevenPoint);
