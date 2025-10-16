import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from './apiSimulator';

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
          throw new Error(
            `Network response was not ok when fetching reviews for product ID ${product.id}`
          );
        }
        console.log(`Reviews for ${product.name}:`, reviews);
      }
    } catch (reviewError) {
      console.error('Error fetching product reviews:', reviewError);
    }
  } catch (error) {
    console.error('Error fetching product catalog:', error);
  }

  try {
    const salesReport = await fetchSalesReport();
    if (!salesReport) {
      throw new Error('Network response was not ok when fetching sales report');
    }
    console.log('Sales Report:', salesReport);
  } catch (salesError) {
    console.error('Error fetching sales report:', salesError);
  } finally {
    console.log('All API calls have been attempted');
  }
}
