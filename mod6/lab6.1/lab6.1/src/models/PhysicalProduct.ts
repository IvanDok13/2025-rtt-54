import { Product } from './Product.js';

export class PhysicalProduct extends Product {
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
}
