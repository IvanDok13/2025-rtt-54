import { GROCERIES_TAX_RATE, STANDART_TAX_RATE } from './const';
import { ValidationError } from './errorHandler';

export function calculateTax(price: number, categoty: string): string {
  if (price < 0) {
    throw new ValidationError('Price must be a positive number');
  }

  let taxRate = STANDART_TAX_RATE;
  if (categoty.toLowerCase() === 'groceries') {
    taxRate = GROCERIES_TAX_RATE;
  }

  return `Total prise with tax: $${(price * taxRate + price).toFixed(2)}`;
}
