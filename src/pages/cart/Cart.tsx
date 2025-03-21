import { RootState } from "@redux/store";
import formatter from "@utils/formatPrice";

import CardProductCart from "@components/cardProductCart/CardProductCart";
import EmptyCard from "./EmptyCard";
import PurchaseStepsPanel from "./PurchaseStepsPanel";

import { useSelector } from "react-redux";
import { useMemo } from "react";

const Cart: React.FC = () => {

    const { products } = useSelector<RootState, RootState['cartReducer']>(rootReducer => rootReducer.cartReducer);

    const totalPriceProducts:number = useMemo(()=> {
        return products.reduce((acc, curr)=> acc + (curr.price * (curr.quantity ?? 0)), 0)
    },[products])

    return (
        <main className="min-h-[80vh] bg-slate-700">
            <PurchaseStepsPanel/>

            {products && products.length > 0 &&
                <section className="w-full p-4 h-32 md:h-40 text-2xl md:text-3xl text-white">
                    <h2 className="flex justify-center items-center gap-x-2 mx-auto bg-slate-900 h-full min-w-60">
                        Total: <span>{formatter.format(totalPriceProducts)}</span>
                    </h2>
                </section>
            }

            <section className="flex flex-col gap-x-4 p-2  min-h-[70vh] w-[98%] md:w-[66vw] mx-auto">

                {products && products.length > 0 ? (

                    products.map(product => (
                        <CardProductCart key={product.id} product={product}/>
                    )

                )) : <EmptyCard />}
            </section>
        </main>
    )
}
export default Cart;