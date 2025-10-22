// Update API Simulation Functions to use these custom error classes when rejecting Promises.

import { DataError, NetworkError } from './errorClasses';

export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve([
          { id: 1, name: 'Laptop', price: 1200 },
          { id: 2, name: 'Headphones', price: 200 },
        ]);
      } else if (random > 0.5 && random < 0.75) {
        reject(
          new NetworkError('Failed to fetch product catalog - Network timeout')
        );
      } else {
        reject(
          new DataError(
            'Failed to fetch product catalog - Data corruption detected'
          )
        );
      }
    }, 1000);
  });
};

export const fetchProductReviews = (
  id: number
): Promise<{ id: number; content: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.7) {
        resolve([
          {
            id: 1,
            content:
              'jweahjfijefpoakwf;oakefkaw;efkalewfja;lwfjaw;ofjk[wajfo;awijfoaw;ejfk;oawkf',
          },
          {
            id: 2,
            content:
              'awioehfpwaowpeihfaopwhfpoaiwefaew;hf;aiowhefoaw;hfawhifwaihfoiwahefaweifhawoiefhowaef',
          },
        ]);
      } else if (random > 0.7 && random < 0.8) {
        reject(
          new NetworkError(
            `Failed to fetch reviews for product ID ${id} - Connection lost`
          )
        );
      } else {
        reject(
          new DataError(
            `Failed to fetch reviews for product ID ${id} - Invalid data format`
          )
        );
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<{
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.7) {
        resolve({
          totalSales: 50000,
          unitsSold: 150,
          averagePrice: 333.33,
        });
      } else if (random >= 0.7 && random < 0.85) {
        reject(
          new NetworkError(
            'Failed to fetch sales report - Server not reachable'
          )
        );
      } else {
        reject(
          new DataError(
            'Failed to fetch sales report - Database connection failed'
          )
        );
      }
    }, 1000);
  });
};
