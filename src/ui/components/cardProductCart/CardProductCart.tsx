import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import TypeProductDetails from "../../../model/@types/TypeProductDetails";
import formatter from "../../../model/utils/formatPrice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../model/redux/store";
import { removeProductFromCart, increaseProductQuantity, decrementProductQuantity } from "../../../model/redux/cart/actions";

const CardProductCart: React.FC<{product: TypeProductDetails}> = ({ product }) => {

    const dispatch:AppDispatch = useDispatch();

    function handleRemoveProductCartClick(product:TypeProductDetails) {
        dispatch(removeProductFromCart(product))
    }

    function handleIncreaseQuantityClick(product:TypeProductDetails) {
        dispatch(increaseProductQuantity(product))
    }

    function handleDecrementQuantityClick(product:TypeProductDetails) {
        dispatch(decrementProductQuantity(product))
    }

    return (
        <div key={product.id} className="flex justify-between items-center p-4 border-b border-gray-300 text-white">
            <figure>
                <img src={product.thumbnail} alt={product.title} />
            </figure>

            <div className="space-y-2 w-[28rem] flex items-center">
                <div>
                    <p className="text-lg">{product.title}</p>
                    <p>{formatter.format(product.price)}</p>
                    <p>Estoque: {product.initial_quantity}</p>
                </div>

                <button onClick={()=> handleRemoveProductCartClick(product)} className="hover:text-blue-800 text-blue-700">Remover</button>
            </div>

            <div className="flex items-center">
                <LuMinusCircle onClick={() => handleDecrementQuantityClick(product)} size={24} className="cursor-pointer" />
                <span className="mx-2">{product.quantity}</span>
                <LuPlusCircle onClick={() => handleIncreaseQuantityClick(product)} size={24} className="cursor-pointer" />
            </div>
        </div>
    )
}
export default CardProductCart;