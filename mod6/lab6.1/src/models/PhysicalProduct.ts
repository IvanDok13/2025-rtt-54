import { Product } from './Product.js';

interface DiscountableProduct {
  applyDiscount(priceDiscount: number): void;
}

export class PhysicalProduct extends Product implements DiscountableProduct {
  weight: number;
  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }
  getPriceWithTax() {
    return this.price * 1.1;
  }
  get formattedWeight() {
    return `${this.weight / 2.5} kg`;
  }

  applyDiscount(percentDiscount: number): void {
    console.log((this.price *= percentDiscount / 100));
  }
}
