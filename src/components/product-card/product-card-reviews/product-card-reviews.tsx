import React from 'react';
import Rating from '@/components/ui/rating/rating';
import s from './product-card-reviews.module.scss';

interface ProductBadgeProps {
  reviewsCount?: number | undefined;
  ratingValue: number | undefined;
}

const ProductCardRewiews: React.FC<ProductBadgeProps> = ({ reviewsCount }) => {

  const getLastDigit = (number: number) => {
    return number % 10;
  };

  const getReviewText = (reviewsCount: number) => {
    const lastDigit = getLastDigit(reviewsCount);

    if ([0, 5, 6, 7, 8, 9].includes(lastDigit) || (reviewsCount >= 11 && reviewsCount <= 19)) {
      return 'відгуків';
    } else if (lastDigit === 1) {
      return 'відгук';
    } else {
      return 'відгуки';
    }
  };

  return (
    <div className={s.reviewBlock}>
      {reviewsCount && reviewsCount > 0 ? (
        <>
          <Rating readonly ratingValue={4} size="small" />
          <span className={s.reviewsCount}>
            {reviewsCount} {getReviewText(reviewsCount)}
          </span>
        </>
      ) : (
        <span className={s.reviewsPlaseholder}>Відгуки відсутні</span>
      )}
    </div>
  );
};

export default ProductCardRewiews;
