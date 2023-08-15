function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity; // п.2
  let sum = 0;
  let avg = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    //п.3
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = (sum / arr.length).toFixed(2); //п.5
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0; //п.1
  let avg = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity; //п.2
  let min = Infinity;
  let difference;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    difference = max - min;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; //п.3
  let sumOddElement = 0;
  let difference1 = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
    difference1 = sumEvenElement - sumOddElement;
  }
  return difference1;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; //п.4
  let countEvenElement = 0;
  let result = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
    result = sumEvenElement / countEvenElement;
  }
  return result;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; //п.2

  for (let i = 0; i < arrOfArr.length; i++) {
    //п.3
    let elements = 0;
    let result1 = 0;
    elements = arrOfArr[i];
    result1 = func(...elements); //п.4

    if (result1 > maxWorkerResult) {
      //п.5
      maxWorkerResult = result1; //п.6
    }
  }
  return maxWorkerResult;
}
