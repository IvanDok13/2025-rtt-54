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
