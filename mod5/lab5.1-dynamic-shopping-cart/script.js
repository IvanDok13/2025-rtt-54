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
    const priceDiv = document.createElement('div');
    const nameDiv = document.createElement('div');

    const ammount = +productPriceInput.value;
    li.dataset.price = ammount;
    li.className = 'cart-item';
    priceDiv.textContent = ammount;
    btn.textContent = 'Remove';
    nameDiv.textContent = productNameInput.value;

    cart.appendChild(li);
    li.appendChild(nameDiv);
    li.appendChild(priceDiv);
    li.appendChild(btn);
    updateTotalPrice(ammount);
  }
}

cart.onclick = function (event) {
  let target = event.target;
  if (target.tagName !== 'BUTTON') return;

  removeItem(event);
};

addProductButton.addEventListener('click', function () {
  renderList();
  productNameInput.value = '';
  productPriceInput.value = '';
});
