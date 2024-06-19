import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface RandomStarsProps {
  maxStars?: number;
  classNames?: string
}

const RandomStars: React.FC<RandomStarsProps> = ({ maxStars = 5, classNames = "text-xl" }) => {
  const filledStars = Math.floor(Math.random() * (maxStars + 1));
  const emptyStars = maxStars - filledStars;

  return (
    <div className={`${classNames} flex flex-nowrap my-2 text-yellow-500`}>
      {Array.from({ length: filledStars }, (_, index) => (
        <FaStar key={index} />
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={filledStars + index} />
      ))}
    </div>
  );
};

export default RandomStars;