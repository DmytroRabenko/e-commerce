'use client';
import Image from 'next/image';
import Link from 'next/link';
import useViewedStore from '@/store/viewedStore';
import ProductBadge from '@/components/product-card/product-badge/product-badge';
import FavoriteIcon from '@/components/product-card/favorite-icon/favorite-icon';
import ProductBuy from '@/components/product-card/product-buy/product-buy';
import ProductCardRewiews from '@/components/product-card/product-card-reviews/product-card-reviews';
import type { Product } from '@/types/types';
import s from './product-card.module.scss';

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, mainCategory, brand, seria, price, images, id, value, salePrice, count } = product;
  const { addToViewed } = useViewedStore();
  return (
    <div className={s.productCard}>
      <Link onClick={() => addToViewed(product)} href={`/product/${product.id}`}>
        <div className={s.imageContainer}>
          <Image className={s.image} src={images[0]} alt={title} fill={true} />
        </div>
        <ProductCardRewiews productId={id} />
        <div className={s.description}>
          <p className={s.type}>{title}</p>
          <h5 className={s.name}>
            {brand} {seria}
          </h5>
          <div className={s.value}>{value ? value: ''}</div>
        </div>
      </Link>
      {count > 0 ? (
        <div className={s.priceblock}>
        {salePrice && (<span className={s.salePrice}>{salePrice} грн</span>)}
        <p className={`${s.price} ${salePrice ? s.sale : ''}`}>
          {price}
          <span> грн</span>
        </p>
      </div>
      ): (
        <p className={s.notHave}>немає в наявності</p>
      ) }
      
      <ProductBuy product={product} />

      <div className={s.favorite}>
        <FavoriteIcon product={product} />
      </div>
      <ProductBadge category={mainCategory} />
    </div>
  );
};

export default ProductCard;
