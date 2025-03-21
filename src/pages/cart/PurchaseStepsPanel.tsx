import { useState } from "react";
import { FaShoppingCart, FaTruck, FaUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const PurchaseStepsPanel: React.FC = () => {

    const totalWidthPercentage: number = 100;
    const pagesQuantity: number = 4;
    const initialPageWidthPercentage: number = totalWidthPercentage / pagesQuantity;

    const [hoverIndex, setHoverIndex] = useState<number>(1);

    function handleWidthClick(numberPage: number) {
        setHoverIndex(numberPage);
    }

    return (
        <div className="p-4 bg-slate-800">
            <div className="mx-auto flex items-center justify-between w-full md:w-[30rem] relative z-0">
                
                <div className="absolute -z-10 left-0 h-2 rounded-full bg-slate-950 transition-all duration-300"
                    style={{ width: `${hoverIndex * initialPageWidthPercentage}%`}}
                ></div>

                <button title="Shopping cart"
                    onClick={() => handleWidthClick(1)}
                    className={`${hoverIndex === 1 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-12 md:size-16 border-[4px] text-xl md:text-3xl grid place-items-center rounded-full`}>
                    <FaShoppingCart />
                </button>

                <button title="Your identification"
                    onClick={() => handleWidthClick(2)}
                    className={`${hoverIndex === 2 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-12 md:size-16 border-[4px] text-xl md:text-3xl grid place-items-center rounded-full disabled:opacity-40`} disabled>
                    <FaUser />
                </button>

                <button title="Your delivery"
                    onClick={() => handleWidthClick(3)}
                    className={`${hoverIndex === 3 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-12 md:size-16 border-[4px] text-xl md:text-3xl grid place-items-center rounded-full disabled:opacity-40`} disabled>
                    <FaTruck />
                </button>

                <button title="Payment"
                    onClick={() => handleWidthClick(4)}
                    className={`${hoverIndex === 4 ? "border-blue-700" : "border-slate-950"} bg-gray-700 size-12 md:size-16 border-[4px] text-xl md:text-3xl grid place-items-center rounded-full disabled:opacity-40`} disabled>
                    <MdOutlinePayment />
                </button>
            </div>
        </div>
    )
}
export default PurchaseStepsPanel;