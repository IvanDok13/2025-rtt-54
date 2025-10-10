export class Product {
  sku: string;
  name: string;
  price: number;
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails() {
    return `sku: ${this.sku}, name: ${this.name}, price: ${this.price}`;
  }

  getPriceWithTax() {
    return this.price * 1.1;
  }
}
