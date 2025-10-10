import { Product } from '../models/Product.js';

export function calculateTax(product: Product) {
  return product.getPriceWithTax();
}
