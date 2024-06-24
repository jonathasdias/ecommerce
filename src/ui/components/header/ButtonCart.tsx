import { useMemo } from "react";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../model/redux/store";

const ButtonCart:React.FC = () => {

    const { products } = useSelector<RootState, RootState["cartReducer"]>(rootReducer => rootReducer.cartReducer);

    const productsCountCart:number = useMemo(()=> {
        return products.reduce((acc, curr)=> acc + (curr.quantity ?? 0), 0)
    },[products])

    return (
        <Link to="/cart" className="relative grid place-items-center transition-all hover:scale-110 size-10 rounded-full">
            {productsCountCart > 0 &&
                <span className="absolute top-0 right-0 px-1 rounded-full text-sm font-bold">{productsCountCart}</span>
            }
            <FaOpencart className="text-2xl"/>
        </Link>
    )
}
export default ButtonCart;