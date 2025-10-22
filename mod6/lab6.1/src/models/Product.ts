export class Product {
  sku: string;
  name: string;
  price: number;
  quantity: number = 0;
  constructor(sku: string, name: string, price: number, quantity?: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    if (quantity) this.quantity = quantity;
  }

  displayDetails() {
    return `sku: ${this.sku}, name: ${this.name}, price: ${this.price}`;
  }

  getPriceWithTax() {
    return this.price * 1.1;
  }
}
