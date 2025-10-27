// Discount Calculator Module (discountCalculator.ts):
// Create a calculateDiscount() function to handle discount calculations for products.
// This function should return the dollar amount that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $10.

import type Product from '../models/Product';

export function calculateDiscount(this: Product): number {
  if (this.discountPercentage < 0 || this.discountPercentage > 100) {
    throw new Error('Discount percentage must be between 0 and 100.');
  }
  const discountAmount = (this.price * this.discountPercentage) / 100;
  return discountAmount;
}
