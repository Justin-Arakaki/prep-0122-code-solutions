function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

function addAndMultiplyBy5(num1, num2) {
  const sum = addTwoNumbers(num1, num2);
  return sum * 5;
}

function multiplyAndDivideBy5(num1, num2) {
  const product = num1 * num2;
  return product / 5;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function cube(number) {
  return number ** 3;
}

console.log('sum', addTwoNumbers(2, 2));
console.log('to minutes', convertHoursToMinutes(2));
console.log('greeting', getGreeting('World'));
console.log('add n mult', addAndMultiplyBy5(10, 5));
console.log('mult n div', multiplyAndDivideBy5(35, 10));
console.log('difference', subtractTwoNumbers(22, 7));
console.log('circumference', getCircleCircumference(5));
console.log('full name', getFullName('Juan', 'Ramirez'));
console.log('cube', cube(5));
