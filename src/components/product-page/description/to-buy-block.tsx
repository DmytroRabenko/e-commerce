'use client';
import useCartStore from '@/store/cartStore';
import Button from '@/components/ui/button/button';
import FavoriteIcon from '@/components/product-card/favorite-icon/favorite-icon';
import { Icons } from '@/components/ui/icons/icons';
import type { Product } from '@/types/types';
import s from './to-buy-block.module.scss';

interface ProductBuyProps {
  product: Product;
}

const ToBuyBlock: React.FC<ProductBuyProps> = ({ product }) => {
  const { price, salePrice, count, id } = product;
  const { addToCart } = useCartStore();

  return (
    <div className={s.container}>
      {count > 0 ? (
        <div className={s.content}>
          <div className={s.priceblock}>
            {salePrice && <span className={s.salePrice}>{salePrice} грн</span>}
            <p className={`${s.price} ${salePrice ? s.sale : ''}`}>
              {price}
              <span> грн</span>
            </p>
          </div>
          <FavoriteIcon product={product}/>
        </div>
      ) : (
        <p className={s.notHave}>немає в наявності</p>
      )}

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
