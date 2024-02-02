import Rating from "@/components/ui/rating/rating";
import { ReviewType } from "@/types/types";
import s from './review.module.scss'

interface ReviewProps {
    review : ReviewType
}

const Review:React.FC<ReviewProps> = async ({review}) => {
    const{name, rating, text, date, answerName, answerDate, answerText} = review;
  return (
    <div className={s.review}>
      <div className={s.title}>
        <h5 className={s.name}>{name}</h5>
        <Rating size="small" readonly ratingValue={rating} />
      </div>
      <p className={s.text}>{text}</p>
      <div className={s.date}>{date}</div>
      {answerText && (
        <div className={s.answer}>
          <span className={s.answerTitle}>{answerName}</span>
          <p className={s.answerText}>{answerText}</p>
          <div className={s.answerDate}>{answerDate}</div>
        </div>
      )}
    </div>
  );
};
export default Review;