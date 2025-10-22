import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from './apiSimulator';
import { DataError, NetworkError } from './errorClasses';

export async function displayData() {
  try {
    const products = await fetchProductCatalog();
    if (!products.length) {
      throw new Error('Network response was not ok when fetching products');
    }
    console.log(`Products:`, products);

    try {
      for (const product of products) {
        const reviews = await fetchProductReviews(product.id);
        if (!reviews.length) {
          throw new DataError(`No reviews found for product ID ${product.id}`);
        }
        console.log(`Reviews for ${product.name}:`, reviews);
      }
    } catch (reviewError) {
      if (reviewError instanceof NetworkError) {
        console.error(
          'Network error fetching product reviews:',
          reviewError.message
        );
      } else if (reviewError instanceof DataError) {
        console.error(
          'Data error fetching product reviews:',
          reviewError.message
        );
      } else {
        console.error(
          'Unexpected error fetching product reviews:',
          reviewError
        );
      }
    }
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error('Network error fetching product catalog:', error.message);
    } else if (error instanceof DataError) {
      console.error('Data error fetching product catalog:', error.message);
    } else {
      console.error('Unexpected error fetching product catalog:', error);
    }
  }
  try {
    const salesReport = await fetchSalesReport();
    if (!salesReport) {
      throw new DataError('Sales report data is empty');
    }
    console.log('Sales Report:', salesReport);
  } catch (salesError) {
    if (salesError instanceof NetworkError) {
      console.error('Network error fetching sales report:', salesError.message);
    } else if (salesError instanceof DataError) {
      console.error('Data error fetching sales report:', salesError.message);
    } else {
      console.error('Unexpected error fetching sales report:', salesError);
    }
  } finally {
    console.log('All API calls have been attempted');
  }
}
