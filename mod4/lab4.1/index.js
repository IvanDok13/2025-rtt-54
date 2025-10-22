// Task 1: Flexible String Manipulation with Functions
function formatFullName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

const firstName = 'Ivan';
const lastName = 'Klochkov';

console.log(formatFullName(firstName, lastName)); // "Klochkov, Ivan"

// Task 2: Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== 'number' ||
    typeof quantity !== 'number' ||
    typeof taxRate !== 'number'
  ) {
    return 'Invalid input.';
  }

  return price * quantity * (1 + taxRate);
}

console.log(calculateTotalCost(100, 2, 0.2)); // 240

// Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed) {
  if (typeof age !== 'number' || typeof isEmployed !== 'boolean') {
    return 'Invalid input.';
  }
  let res = '';
  if (age > 18 && isEmployed) return (res = 'eligible');
  if (age > 18 && !isEmployed) return (res = 'conditionally eligible');
  else return (res = 'not eligible');
}

console.log(checkEligibility(20, true)); // "eligible"
console.log(checkEligibility(20, false)); // "conditionally eligible"
console.log(checkEligibility(16, true)); // "not eligible"

// Task 4: Refactoring for Reusability

function calculateTotalCostAndSale(price, quantity, taxRate, discount = 0) {
  if (
    typeof price !== 'number' ||
    typeof quantity !== 'number' ||
    typeof taxRate !== 'number'
  ) {
    return 'Invalid input.';
  }

  return (price * quantity - discount) * (1 + taxRate);
}

console.log(calculateTotalCostAndSale(100, 2, 0.2)); // 240
console.log(calculateTotalCostAndSale(100, 2, 0.2, 20)); // 220
