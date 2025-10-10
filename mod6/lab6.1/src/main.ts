import { DigitalProduct } from './models/DigitalProduct.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';

const products = [
  new PhysicalProduct('M-BLD-001', 'Laptop', 1000, 20),
  new DigitalProduct('M-DIG-002', 'Camera', 500, 5),
];

products.forEach(product => {
  console.log(`Product: ${product.displayDetails()}`);
  console.log(`Price with tax: ${product.getPriceWithTax()}`);
});

const productWithDiscount = new PhysicalProduct('s-asd-001', 'Mouse', 1200, 2);
productWithDiscount.applyDiscount(33);

const bulkProduct = new PhysicalProduct('s-asd-002', 'Keyboard', 1500, 3, 25);
bulkProduct.applyDiscount(20);
