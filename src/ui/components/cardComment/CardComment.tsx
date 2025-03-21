import { Reviews } from "@/model/@types/TypeProduct";
import formatDateTimeToUs from "@/model/utils/formatDateTimeToUs";
import RatingStars from "../ratingStars/RatingStars";
import { FaCircleUser } from "react-icons/fa6";

interface CardCommentPropsTypes {
  review: Reviews;
}

const CardComment: React.FC<CardCommentPropsTypes> = ({ review }) => {
  return (
    <article key={review.reviewerName} className="p-4">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <FaCircleUser className="size-10" />
          <h2>{review.reviewerName}</h2>
        </div>
        <h3 className="text-base">{formatDateTimeToUs(review.date)}</h3>
      </div>

      <RatingStars rating={review.rating} />

      <p className="mt-4">{review.comment}</p>
    </article>
  );
};

export default CardComment;
