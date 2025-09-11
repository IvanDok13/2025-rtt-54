// Task 1: Array Manipulation Basics

let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  if (shoppingList.length === 0) {
    console.log('The shopping list is empty.');
    return;
  }
  console.log(shoppingList);
}

// OR

function displayList() {
  if (shoppingList.length === 0) {
    console.log('The shopping list is empty.');
    return;
  }
  return shoppingList.forEach(item => console.log(item));
}

// Task 2: Filter and Search an Array

function addNewItem(item) {
  if (!shoppingList.includes(item)) shoppingList.push(item);
  return shoppingList;
}

// shoppingList = ["banana", "apple", "orange"];
console.log(addNewItem('banana')); // ["banana", "apple", "orange"]
console.log(addNewItem('grape')); // ["banana", apple, "orange", "grape"]

function filterItems(searchTerm) {
  const lowerCaseTerm = searchTerm.toLowerCase(); // just for me
  return shoppingList.filter(item =>
    item.toLowerCase().includes(lowerCaseTerm)
  );
}

// shoppingList = ['banana', 'apple', 'orange'];

console.log(filterItems('banana')); // ["banana", "apple", "orange"]
console.log(filterItems('grape')); // ["banana", "apple", "orange", "grape"]
