import { Product } from './Product.js';

interface DiscountableProduct {
  applyDiscount(priceDiscount: number): void;
}

export class PhysicalProduct extends Product implements DiscountableProduct {
  weight: number;
  constructor(
    sku: string,
    name: string,
    price: number,
    weight: number,
    quantity?: number
  ) {
    super(sku, name, price, quantity);
    this.weight = weight;
  }
  getPriceWithTax() {
    return this.price * 1.1;
  }
  get formattedWeight() {
    return `${this.weight / 2.5} kg`;
  }

  applyDiscount(percentDiscount: number): void {
    if (this.quantity > 10) {
      const extraDiscount = 0.1;
      console.log(
        `The full price is ${this.price}. You get ${extraDiscount * 100}% discount for ${this.quantity} bulk  purchase! The new price for one product is: ${(this.price -= this.price * extraDiscount)}`
      );
    } else {
      console.log((this.price *= percentDiscount / 100));
    }
  }
}
