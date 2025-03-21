import RatingStars from "../ratingStars/RatingStars";
import { Link } from "react-router-dom";
import formatter from "@utils/formatPrice";
import regexImproveImageQuality from "@utils/regexImproveImageQuality";
import { ProductType } from "@/model/@types/TypeProduct";

interface CardProductProps {
  product: ProductType;
  classNames?: string;
}

const CardProduct: React.FC<CardProductProps> = ({ product, classNames }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className={`${classNames} border-2 rounded-md overflow-hidden p-2 bg-white`}
    >
      <img
        src={regexImproveImageQuality(product.thumbnail)}
        alt={product.title + product.id}
        className="w-full"
      />

      <p className="text-base text-wrap overflow-hidden text-ellipsis line-clamp-2">
        {product.title}
      </p>

      <RatingStars rating={product.rating} />

      <p>{formatter.format(product.price)}</p>
    </Link>
  );
};
export default CardProduct;
