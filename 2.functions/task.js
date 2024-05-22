"use strict"

function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

  for (let i = 0; i < arr.length; i++) {

		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

  function summElementsWorker(...arr) {

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {

	if (arr.length < 1) {
		return 0;
	}

	let min = Infinity
	let max = -Infinity
	let cur;

	for (let i = 0; i < arr.length; i++) {

		cur = Number(arr[i]);

		if (cur < min) {
			min = cur;
		}

		if (cur > max) {
			max = cur;
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 1) {
			sumOddElement = sumOddElement + arr[i];
		} else {
			sumEvenElement = sumEvenElement + arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length < 1) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++;
		}
	}
  
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const currentWorkerResult = func(...arrOfArr[i]);
		if (currentWorkerResult > maxWorkerResult) {
			maxWorkerResult = currentWorkerResult;
		}
	}
	
  return maxWorkerResult;
}