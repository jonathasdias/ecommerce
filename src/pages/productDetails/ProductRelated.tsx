import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import GetProductsPerCategory from "@api/GetProductsPerCategory";
import CardProduct from "@components/cardProduct/CardProduct";


const ProductRelated: React.FC<{categoryName: string}> = ({ categoryName }) => {

    const limit:number = 20;
    const page:number = 0;

    const { data:relatedProducts } = GetProductsPerCategory(categoryName, page, limit);

    const { productId } = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    return (
        <div className="px-2 border-black">
            <h2 className="text-2xl p-4">Produtos da mesma categoria</h2>

            <div className="flex overflow-hidden overflow-x-auto gap-x-2 p-3">
                {relatedProducts && 
                    relatedProducts.products.map(product => (
                        <CardProduct key={product.title + 1} product={product} classNames="flex-shrink-0 w-52 md:w-64"/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductRelated;