// Завдання 1
let inputNumber1 = prompt("Введіть число:");
let squareResult = Number(inputNumber1) ** 2;
alert("Квадрат числа " + inputNumber1 + " дорівнює: " + squareResult);

// Завдання 2
let inputNum1 = prompt("Введіть перше число:");
let inputNum2 = prompt("Введіть друге число:");
let averageResult = (Number(inputNum1) + Number(inputNum2)) / 2;
alert("Середнє арифметичне чисел " + inputNum1 + " і " + inputNum2 + " дорівнює: " + averageResult);

// Завдання 3
let sideLen = prompt("Введіть довжину сторони квадрата:");
let squareAreaResult = Number(sideLen) ** 2;
alert("Площа квадрата зі стороною " + sideLen + " дорівнює: " + squareAreaResult);

// Завдання 4
const kilometersToMiles = 0.621371;
let inputKilometers = prompt("Введіть кількість кілометрів:");
let milesResult = inputKilometers * kilometersToMiles;
alert(inputKilometers + " км дорівнює " + milesResult + " милям");

// Завдання 5
let inputNum3 = prompt("Введіть перше число:");
let inputNum4 = prompt("Введіть друге число:");
let sumResult = Number(inputNum3) + Number(inputNum4);
let differenceResult = Number(inputNum3) - Number(inputNum4);
let productResult = Number(inputNum3) * Number(inputNum4);
let quotientResult = Number(inputNum3) / Number(inputNum4);
alert("Сума: " + sumResult + " Різниця: " + differenceResult + " Добуток: " + productResult + " Частка: " + quotientResult);

// Завдання 6
let aValue = prompt("Введіть значення a:");
let bValue = prompt("Введіть значення b:");
let xResult = -bValue / aValue;
alert('Значення x у рівнянні ' + aValue + ' * x + ' + bValue + ' = 0 дорівнює: ' + xResult);

// Завдання 8
let threeDigitInput = prompt("Введіть тризначне число:");
let lastDigitResult = threeDigitInput % 10;
alert("Остання цифра вашого числа: " + lastDigitResult);

// Завдання 9
let fiveDigitInput = prompt("Введіть п'ятизначне число:");
let lastDigit9 = fiveDigitInput % 10;
let remainingDigits9 = (fiveDigitInput - lastDigit9) / 10;
let rearrangedNumber9 = lastDigit9 * 10000 + remainingDigits9;
alert("Переміщена остання цифра: " + rearrangedNumber9);

// Завдання 10
let totalSalesInput = prompt("Введіть загальну суму продажу за місяць:");
let salaryResult = 250 + (0.1 * totalSalesInput);
alert("Зарплата працівника за місяць: " + salaryResult);