"use strict";

function solveEquation(a, b, c) {
  // Вычисляем дискриминант
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return []; // Нет корней
  } else if (discriminant === 0) {
    return [-b / (2 * a)]; // Один корень
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    return [
      -b / (2 * a) + sqrtDiscriminant / (2 * a),
      -b / (2 * a) - sqrtDiscriminant / (2 * a)
    ]; // Два корня
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Переводим процентную ставку в месячную
  const monthlyRate = percent / 1200;

  // Рассчитываем тело кредита
  const loanAmount = amount - contribution;

  // Рассчитываем ежемесячный платеж
  const payment = loanAmount * (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

  // Рассчитываем общую сумму выплаты
  const totalPayment = payment * countMonths;

  // Округляем результат
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;
}

//  Примеры использования функций
console.log(solveEquation(1, -3, 2)); // []
console.log(solveEquation(1, -8, 16)); // [-4]
console.log(solveEquation(1, -6, 9)); // [-3, 3]

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52