let firstNumber = prompt('Enter the first number');
let secondNumber = prompt('Enter the second number');

let sum = Number(firstNumber) + Number(secondNumber);
let difference = Number(firstNumber) - Number(secondNumber);
let product = Number(firstNumber) * Number(secondNumber);
let quotient = Number(firstNumber) / Number(secondNumber);
let remainder = Number(firstNumber) % Number(secondNumber);

if (isNaN(sum)) {
  alert('Please enter a number');
} else {
  alert(`The sum of your numbers is ${sum}`);
  alert(`The difference of your numbers is ${difference}`);
  alert(`The product of your numbers is ${product}`);
  alert(`The quotient of your numbers is ${quotient}`);
  alert(`The remainder of your numbers is ${remainder}`);
}

if (sum % 2 === 0) {
  alert('The sum of your numbers is even');
} else {
  alert('The sum of your numbers is odd');
}

if (firstNumber === secondNumber) {
  alert('The numbers you entered are the same');
} else {
  alert('The numbers you entered are different');
}
