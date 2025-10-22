// Implement a module to handle sorting products by price or by name.

export function sortProductsByPrice(products: { price: number }[]) {
  console.log(products.sort((a, b) => a.price - b.price));
}
