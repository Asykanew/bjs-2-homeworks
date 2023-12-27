function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10); // { min: -99, max: 99, avg: 3.33 }
getArrayParams(1, 2, 3, -100, 10); // { min: -100, max: 10, avg: -16.80 }
getArrayParams(5); // { min: 5, max: 5, avg: 5 }

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }

  return sum;
}

console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  } 
  return (max - min);
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr.length < 1) {
      return 0;
    } else if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else if(arr[i] % 2 == 1) {
     sumOddElement += arr[i];
    }
  } 
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr.length < 1) {
      return 0;
    } else if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  return (sumEvenElement / countEvenElement); 
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;

}
