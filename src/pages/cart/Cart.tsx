import { RootState } from "../../model/redux/store";
import { useSelector } from "react-redux";

import EmptyCard from "./EmptyCard";
import CardProductCart from "../../ui/components/cardProductCart/CardProductCart";
import PurchaseStepsPanel from "./PurchaseStepsPanel";
import { useMemo } from "react";
import formatter from "../../model/utils/formatPrice";

const Cart: React.FC = () => {

    const { products } = useSelector<RootState, RootState['cartReducer']>(rootReducer => rootReducer.cartReducer);

    const totalPriceProducts:number = useMemo(()=> {
        return products.reduce((acc, curr)=> acc + (curr.price * (curr.quantity ?? 0)), 0)
    },[products])

    return (
        <main className="min-h-[80vh] bg-slate-700">
            <PurchaseStepsPanel/>

            <section className="w-full p-4 h-40 text-3xl text-white">
                <h2 className="flex justify-center items-center gap-x-2 mx-auto bg-slate-900 h-full min-w-96">
                    Total: <span>{formatter.format(totalPriceProducts)}</span>
                </h2>
            </section>

            <section className="flex flex-col gap-x-4 bg-gray-900 min-h-[70vh] max-w-[66vw] mx-auto">

                {products && products.length > 0 ? (

                    products.map(product=> (
                        <CardProductCart product={product}/>
                    )

                )) : <EmptyCard />}
            </section>
        </main>
    )
}
export default Cart;