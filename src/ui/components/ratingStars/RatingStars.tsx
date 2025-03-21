import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  classNames?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxStars = 5, classNames = "text-xl" }) => {
  const fullStars: number = Math.floor(rating);
  const hasHalfStar: boolean = rating - fullStars >= 0.5;
  const emptyStars: number = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`${classNames} flex flex-nowrap my-2 text-yellow-500`}>
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index + "Star"} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={fullStars + (hasHalfStar ? 1 : 0) + index} />
      ))}
    </div>
  );
};

export default RatingStars;