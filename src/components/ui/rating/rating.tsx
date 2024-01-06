'use client';
import React from 'react';
import { Icons } from '@/components/ui/icons/icons';
import s from './rating.module.scss'

interface RatingProps{
  count?: number;
  readonly?: boolean;
  ratingValue?: number;
  size: 'small' | 'medium' | 'large' 
  onChange?: (value: number) => void;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(function Rating(
  { count = 5, readonly, ratingValue, size,onChange },
  ref
) {
  const [hoverValue, setHoverValue] = React.useState<number | undefined>(undefined);
  const [value, setValue] = React.useState(ratingValue ? Math.floor(ratingValue) : 0);

  const handleMouseMove = (index: number) => {
    if (readonly) return;
    setHoverValue(index + 1);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(undefined);
  };

  const handleRating = (index: number) => {
    if (readonly) return;

    const newValue = Math.max(0, Math.min(index + 1, count));

    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const stars = Array.from({ length: count }, (_, index) => {
    const filled = hoverValue ? index < hoverValue : index < value;
    return (
      <span
        key={`star_${index}`}
        onClick={() => handleRating(index)}
        onMouseEnter={() => handleMouseMove(index)}
        onMouseLeave={handleMouseLeave}
        className={s.star}
      >
        {filled ? (
          <Icons.starFilled className={s.activeStar} size={`${size}`} />
        ) : (
          <Icons.starOutlined className={s.defaultStar} size={`${size}`} />
        )}
      </span>
    );
  });

  return (
    <div ref={ref} className={s.container}>
      {stars}
    </div>
  );
});

export default Rating;
