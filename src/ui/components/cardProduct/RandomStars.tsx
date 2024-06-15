import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface RandomStarsProps {
  maxStars?: number;
}

const RandomStars: React.FC<RandomStarsProps> = ({ maxStars = 5 }) => {
  const filledStars = Math.floor(Math.random() * (maxStars + 1));
  const emptyStars = maxStars - filledStars;

  return (
    <div className="flex flex-nowrap my-2 text-xl text-yellow-500">
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