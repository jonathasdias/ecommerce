import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import formatter from "@utils/formatPrice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
import { removeProductFromCart, increaseProductQuantity, decrementProductQuantity } from "@redux/cart/actions";
import { ProductType } from "@/model/@types/TypeProduct";

const CardProductCart: React.FC<{product: ProductType}> = ({ product }) => {

    const dispatch:AppDispatch = useDispatch();

    function handleRemoveProductCartClick(product:ProductType) {
        dispatch(removeProductFromCart(product))
    }

    function handleIncreaseQuantityClick(product:ProductType) {
        dispatch(increaseProductQuantity(product))
    }

    function handleDecrementQuantityClick(product:ProductType) {
        dispatch(decrementProductQuantity(product))
    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-4 border-b border-gray-300 text-white">
            <img src={product.thumbnail} alt={product.title} className="h-full"/>

            <div className="space-y-2 sm:max-w-[26rem]">
                <p className="text-base text-wrap overflow-hidden text-ellipsis line-clamp-2">{product.title}</p>
                <p className="text-lg text-green-600">{formatter.format(product.price)}</p>
                <p>Stock: {product.stock}</p>
            </div>
 
            <div className="flex flex-row md:flex-col gap-4">
                <button onClick={()=> handleRemoveProductCartClick(product)} className="hover:text-blue-800 text-blue-700">Remover</button>

                <div className="flex items-center">
                    <button>
                        <LuMinusCircle onClick={() => handleDecrementQuantityClick(product)} size={24} className="cursor-pointer" />
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button>
                        <LuPlusCircle onClick={() => handleIncreaseQuantityClick(product)} size={24} className="cursor-pointer" />
                    </button>
                </div>
            </div>

        </div>
    )
}
export default CardProductCart;