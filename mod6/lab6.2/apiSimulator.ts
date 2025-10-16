export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: 'Laptop', price: 1200 },
          { id: 2, name: 'Headphones', price: 200 },
        ]);
      } else {
        reject('Failed to fetch product catalog');
      }
    }, 1000);
  });
};

export const fetchProductReviews = (
  id: number
): Promise<{ id: number; content: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
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
      } else {
        reject(`Failed to fetch reviews for product ID ${id}`);
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
      if (Math.random() < 0.85) {
        resolve({
          totalSales: 50000,
          unitsSold: 150,
          averagePrice: 333.33,
        });
      } else {
        reject('Failed to fetch sales report');
      }
    }, 1000);
  });
};
