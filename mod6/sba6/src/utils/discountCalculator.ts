import { ValidationError } from './errorHandler';

export function calculateDiscount(
  price: number,
  discountPercentage: number
): number {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new ValidationError('Discount must be between 0 and 100');
  }

  if (price < 0) {
    throw new ValidationError('Price must be a positive number');
  }
  const discountAmount = (price * discountPercentage) / 100;
  return discountAmount;
}
