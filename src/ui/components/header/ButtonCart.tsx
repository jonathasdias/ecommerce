import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtonCart:React.FC = () => {
    return (
        <Link to="/cart" className="relative grid place-items-center transition-all hover:scale-110 size-10 rounded-full">
            <span className="absolute top-0 right-0 px-1 rounded-full text-sm font-bold">1</span>
            <FaOpencart className="text-2xl"/>
        </Link>
    )
}
export default ButtonCart;