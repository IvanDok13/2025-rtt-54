document.addEventListener('DOMContentLoaded', function () {
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
      // console.log('The shopping list is empty.');
      return;
    }
    // console.log(shoppingList);
  }

  // OR

  function displayList1() {
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
  // console.log(addNewItem('banana'));  ["banana", "apple", "orange"]
  // console.log(addNewItem('grape')); ["banana", apple, "orange", "grape"]

  function filterItems(searchTerm) {
    const lowerCaseTerm = searchTerm.toLowerCase(); // just for me
    return shoppingList.filter(item =>
      item.toLowerCase().includes(lowerCaseTerm)
    );
  }

  // shoppingList = ['banana', 'apple', 'orange'];

  // console.log(filterItems('banana'));  ["banana", "apple", "orange"]
  // console.log(filterItems('grape')); ["banana", "apple", "orange", "grape"]

  // Task 3: Render the List in the Browser
  const listElements = document.querySelectorAll('.list');
  const input = document.getElementById('input');
  const addBtn = document.getElementById('add');
  const removeBtn = document.getElementById('remove');
  const emptyEl = document.querySelector('.empty-message');

  function renderList() {
    if (emptyEl) emptyEl.remove();
    if (input.value.trim() !== '') {
      addItem(input.value);
      const li = document.createElement('li');
      li.textContent = input.value;
      listElements.item(0).appendChild(li);
    }
  }

  function updateList() {
    if (shoppingList.length === 0) return alert('The shopping list is empty.');
    removeLastItem();
    listElements.forEach(ul => {
      if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
      }
    });
  }

  addBtn.addEventListener('click', renderList);
  removeBtn.addEventListener('click', updateList);
});
