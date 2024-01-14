'use client';
import useCartStore from '@/store/cartStore';
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import type { Product } from '@/types/types';
import s from './to-buy-block.module.scss';

interface ProductBuyProps {
  product: Product;
}

const ToBuyBlock: React.FC<ProductBuyProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className={s.container}>
        <p className={s.price}>
          {product.price}
          <span> грн</span>
        </p>
      <Button
        width="full"
        color="green"
        onClick={() => {
          addToCart(product);
        }}
      >
        <Icons.buy size="medium" />
        Купити
      </Button>
    </div>
  );
};

export default ToBuyBlock;
