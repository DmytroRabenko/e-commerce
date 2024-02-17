import { Metadata } from 'next';
import { getProductReviews, getProductById } from '@/services/services';
import { ReviewType } from '@/types/types';
import Rating from '@/components/ui/rating/rating';
import s from '../product-page.module.scss';
import Review from '@/components/review/review/review';
import AddReview from '@/components/review/add-review/add-review';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id);
  const descriptionText = `${product?.title} ${product?.brand} ${product?.seria} - ${product?.description}`;
  const limitCharacters = (maxLength: number, string: string) => {
    if (string.length <= maxLength) {
      return string;
    } else {
      return string.substring(0, maxLength) + '...';
    }
  };
  const currentDescription = limitCharacters(150, descriptionText);
  return {
    title: `Відгуки про ${product.brand} ${product.seria}`,
    description: currentDescription,
  };
}

const ProductPageReviews = async ({ params }: Props) => {
  const reviews = await getProductReviews(params.id);
  const totalRating = reviews.reduce((sum: number, review: ReviewType) => sum + review.rating, 0) / reviews.length;

  return (
    <div className={s.reviewsBlock}>
      <div className={s.title}>
        <div className={s.ratingTitle}>
          <p className={s.text}>Оцінка користувачів</p>
          <div className={s.content}>
            <span className={s.value}>{totalRating ? totalRating : '0'}</span>
            <div className={s.rating}>
              <Rating readonly size="small" ratingValue={totalRating} />
              <span>Всього відгуків: {reviews.length}</span>
            </div>
          </div>
        </div>
        <AddReview />
      </div>

      <div className={s.reviews}>
        {reviews.map((item: ReviewType) => (
          <Review review={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductPageReviews;
