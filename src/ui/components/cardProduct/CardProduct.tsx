import RandomStars from "../randomStars/RandomStars";
import { Link } from "react-router-dom";
import formatter from "../../../model/utils/formatPrice";

interface ProductType {
    id: string;
    title: string;
    price: number;
    original_price: number;
    available_quantity: number;
    thumbnail: string;
    permalink: string;
    condition: string;
}

interface CardProductProps {
    product: ProductType;
    classNames?: string;
}

const CardProduct:React.FC<CardProductProps> = ({product, classNames}) => {
    return (
        <Link to={`/products/${product.id}`} className={`${classNames} border-2 rounded-md overflow-hidden p-2 bg-white`}>
            <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt={product.title + product.id} className="w-full"/>

            <p className="text-base text-wrap overflow-hidden text-ellipsis line-clamp-2">{product.title}</p>

            <RandomStars maxStars={5}/>

            <p>{formatter.format(product.price)}</p>
        </Link>
    )
}
export default CardProduct;