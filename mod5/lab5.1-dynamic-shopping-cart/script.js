const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('div');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

function renderList() {
  if (productNameInput.value.trim() !== '') {
    const li = document.createElement('div');
    const btn = document.createElement('button');
    const priceSpan = document.createElement('span');

    const ammount = +productPriceInput.value;
    li.dataset.price = ammount;
    priceSpan.textContent = ammount;
    btn.textContent = 'Remove';
    li.textContent = productNameInput.value;

    cart.appendChild(li);
    li.appendChild(priceSpan);
    li.appendChild(btn);
    updateTotalPrice(ammount);
  }
}

addProductButton.addEventListener('click', renderList);
