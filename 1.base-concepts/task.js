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
  const rate = percent / 100 / 12; //п.2
  const sum = amount - contribution; //п.3
  const payment = sum * (rate + rate / (((1 + rate) ** countMonths) - 1)); //п.4
  const fullSum = (payment * countMonths).toFixed(2); //п.5,6
  const fullSumNumber = Number(fullSum);
  return fullSumNumber;
}
