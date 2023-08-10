"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  if (d == 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = percent / 100 / 12; //п.2
  let sum = amount - contribution; //п.3
  let payment = sum * (rate + rate / (((1 + rate) ** countMonths) - 1)); //п.4
  let fullSum = (parseInt(payment * countMonths).toFixed(2)); //п.5,6
   return;
}
