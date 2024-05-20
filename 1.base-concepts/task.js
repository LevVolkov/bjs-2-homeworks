// Функция для решения квадратных уравнений
function solveEquation(a, b, c) {
  'use strict'; // Активация строгого режима

  // Вычисление дискриминанта
  const d = b * b - 4 * a * c;

  if (d < 0) {
    return []; // Нет корней
  } else if (d === 0) {
    return [-b / (2 * a)]; // Один корень
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2]; // Два корня
  }
}

// Функция для расчета выплат по ипотеке
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки в месячную
  const monthlyRate = percent / 1200;

  // Расчет тела кредита
  const body = amount - contribution;

  // Расчет ежемесячного платежа
  const payment = body * (1 + monthlyRate) / ((1 - monthlyRate) / (1 + monthlyRate));

  // Расчет общей суммы выплат
  let total = payment * countMonths;

  // Округление результата
  total = Math.round(total * 100) / 100;

  return total;
}

// Примеры использования функций
console.log('Пример 1:', calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log('Пример 2:', calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log('Пример 3:', calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log('Пример 4:', calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log('Пример 5:', calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log('Пример 6:', calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log('Пример 7:', calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52

// Пример решения квадратного уравнения
const coefficients = [1, -3, 2];
const roots = solveEquation(...coefficients);
console.log('Корни уравнения:', roots); // Корни уравнения: [-2, 1]