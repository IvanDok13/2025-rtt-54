export default class Product {
  title: string;
  price: number;
  id: number;
  category: string;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  tags?: string[];

  constructor(
    title: string,
    price: number,
    id: number,
    category: string,
    discountPercentage: number,
    rating?: number,
    stock?: number,
    tags?: string[]
  ) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.category = category;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.tags = tags;
  }

  displayProductDetails(this: Product): void {
    console.log(
      `Product ID: ${this.id}; Title: ${this.title}; Price: $${this.price}; Category: ${this.category}; Discount Percentage: ${this.discountPercentage}%`
    );
    if (this.rating !== undefined) {
      console.log(`Rating: ${this.rating}`);
    }
    if (this.stock !== undefined) {
      console.log(`Stock: ${this.stock}`);
    }
    if (this.tags !== undefined) {
      console.log(`Tags: ${this.tags.join(', ')}`);
    }
  }

  getPriceWithDiscount(price: number, discountPercentage: number): number {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  }
}
