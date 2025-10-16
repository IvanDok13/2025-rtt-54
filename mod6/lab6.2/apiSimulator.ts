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
  productId: number
): Promise<{ productId: number; content: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve([
          {
            productId: 1,
            content:
              'jweahjfijefpoakwf;oakefkaw;efkalewfja;lwfjaw;ofjk[wajfo;awijfoaw;ejfk;oawkf',
          },
          {
            productId: 2,
            content:
              'awioehfpwaowpeihfaopwhfpoaiwefaew;hf;aiowhefoaw;hfawhifwaihfoiwahefaweifhawoiefhowaef',
          },
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1500);
  });
};
