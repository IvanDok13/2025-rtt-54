import type { ProductDisplayProps } from '../../types';
import ChartButton from '../UserButton';

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div>
      <div className='border p-4 rounded-lg flex flex-col items-center mb-4 gap-4'>
        <img
          src={product.imageUrl}
          alt={product.name}
          width='auto'
          className='mb-2'
        />
        <div className='flex flex-col items-center'>
          <div className='font-bold text-lg'>{product.name}</div>
          <div className='text-gray-600 mb-2'>${product.price.toFixed(2)}</div>

          {showDescription && (
            <div className='text-sm mb-2'>{product.description}</div>
          )}

          {showStockStatus && (
            <div
              className={
                product.inStock ? 'text-green-600 mb-2' : 'text-red-600 mb-2'
              }
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          )}
        </div>
      </div>

      {onAddToCart && (
        <ChartButton text='Add to Cart' className='w-full'></ChartButton>
      )}

      <div>{children}</div>
    </div>
  );
}
