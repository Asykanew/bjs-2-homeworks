"use strict"

function solveEquation(a, b, c) {
<<<<<<< HEAD
  let arr = [];
 let d = (Math.pow(b, 2)) - (4 * a * c);
  if (d < 0) {
    arr = [];
  }
  else if (d == 0) {
    arr[0] = (-b / (2 * a));
  }
  else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  return arr;
=======
	let arr = [];
	let d = (Math.pow(b, 2)) - (4 * a * c);
	if (d < 0) {
		arr = [];
	} else if (d == 0) {
		arr[0] = (-b / (2 * a));
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}
	return arr;
>>>>>>> 765fd454592cde3b1f2ccc80b55683ddb2ff8c25
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
<<<<<<< HEAD
  let P = (percent / 10) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let totalAmount = (payment * countMonths).toFixed(2);
  return totalAmount;
}
=======
	let P = (percent / 100) / 12;
	let S = amount - contribution;
	let payment = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
	let totalAmount = (payment * countMonths).toFixed(2);
	return Number(totalAmount);
}
>>>>>>> 765fd454592cde3b1f2ccc80b55683ddb2ff8c25
