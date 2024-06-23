import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { FaUser, FaTruck, FaShoppingCart  } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

import { RootState } from "../../model/redux/store";
import { useSelector } from "react-redux";

import formatter from "../../model/utils/formatPrice";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart: React.FC = () => {

    const { products } = useSelector<RootState, RootState['cartReducer']>(rootReducer => rootReducer.cartReducer);

    const [ hoverIndex, setHoverIndex ] = useState<number>(1);

    function handleWidthClick(numberPage:number) {
        setHoverIndex(numberPage);
    }

    return (
        <main className="min-h-[80vh]">
            <div className="p-4">
                <div className="mx-auto flex items-center justify-between w-[30rem] relative">
                    <div className="absolute -z-10 left-0 h-2 rounded-full bg-slate-950 transition-all duration-300" 
                    style={{ width: `${hoverIndex * 25}%`}}
                    ></div>
                    
                    <button onClick={()=> handleWidthClick(1)} className={`${hoverIndex === 1 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-16 border-[4px] text-3xl grid place-items-center rounded-full`}><FaShoppingCart/></button>
                    <button onClick={()=> handleWidthClick(2)} className={`${hoverIndex === 2 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-16 border-[4px] text-3xl grid place-items-center rounded-full`}><FaUser/></button>
                    <button onClick={()=> handleWidthClick(3)} className={`${hoverIndex === 3 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-16 border-[4px] text-3xl grid place-items-center rounded-full`}><FaTruck/></button>
                    <button onClick={()=> handleWidthClick(4)} className={`${hoverIndex === 4 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-16 border-[4px] text-3xl grid place-items-center rounded-full`}><MdOutlinePayment/></button>
                </div>
            </div>

            <section className="flex flex-col gap-x-4">

                {products && products.length > 0 &&
                    products.map(product=> (
                        <div key={product.id} className="flex justify-between items-center p-4 border-b border-gray-300">
                            <figure>
                                <img src={product.thumbnail} alt={product.title} />
                            </figure>
                            <div>
                                <p>{product.title}</p>
                                <p>{formatter.format(product.price)}</p>
                            </div>
                            <div className="flex items-center">
                                <LuMinusCircle size={24} className="cursor-pointer" />
                                <span className="mx-2">0</span>
                                <LuPlusCircle size={24} className="cursor-pointer" />
                            </div>
                        </div>
                    )
                )}
            </section>

            {products && products.length === 0 &&
                <div className="h-full grid place-items-center bg-gray-400">
                    <p className="">O carrinho está vazio. <Link to='/' className="text-blue-600 hover:underline">Volte para o início.</Link></p>
                </div>
            }
        </main>
    )
}
export default Cart;