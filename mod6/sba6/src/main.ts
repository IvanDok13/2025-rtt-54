import Product from './models/Product';
import { getProducts } from './services/apiService';
import { calculateDiscount } from './utils/discountCalculator';
import {
  handleAPIError,
  handleValidationError,
  ValidationError,
} from './utils/errorHandler';
import { calculateTax } from './utils/taxCalculator';

const productData = await getProducts();
const products: Product[] = productData.map(
  (product: Product) =>
    new Product(
      product.title,
      product.price,
      product.id,
      product.category,
      product.discountPercentage,
      product.rating,
      product.stock,
      product.tags
    )
);

async function displayProductInfo(id: number) {
  try {
    const productInfo = products.find((product: Product) => product.id === id);

    if (!productInfo) {
      throw new ValidationError(`Product with ID ${id} not found.`);
    }
    productInfo.displayProductDetails();

    const discountedPrice = productInfo.getPriceWithDiscount();
    const priceWithTax = calculateTax(productInfo.price, productInfo.category);
    const discoutPrice = calculateDiscount(
      productInfo.price,
      productInfo.discountPercentage
    );

    console.log(
      `
      Product Title: ${productInfo.title}, 
      Category: ${productInfo.category},
      Discount price: ${discoutPrice.toFixed(2)},
      Price with Discount: ${discountedPrice.toFixed(2)}, 
      Price with Tax: ${priceWithTax.toFixed(2)}
      `
    );
  } catch (error: ValidationError | any) {
    if (error instanceof ValidationError) {
      handleValidationError(error);
    } else {
      handleAPIError(error);
    }
  }
}

displayProductInfo(1);
