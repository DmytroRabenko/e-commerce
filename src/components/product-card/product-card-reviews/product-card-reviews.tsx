'use client'
import { useState, useEffect } from 'react';
import Rating from '@/components/ui/rating/rating';
import { getProductReviews } from '@/services/services';
import s from './product-card-reviews.module.scss';


interface ProductCardReviewsProps {
  productId: string;
}
const ProductCardRewiews: React.FC<ProductCardReviewsProps> =  ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getProductReviews(productId);
      setReviews(fetchedReviews);
      setReviewsCount(fetchedReviews.length);
    };

    fetchReviews();
  }, [productId]);

  const getLastDigit = (number: number): number => {
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
        <span className={s.reviewsPlaseholder}></span>
      )}
    </div>
  );
};

export default ProductCardRewiews;
