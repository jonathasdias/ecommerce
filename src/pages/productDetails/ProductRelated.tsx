import TypeProduct from "../../model/@types/TypeProduct";
import useFetch from "../../model/hooks/useFetch";
import CardProduct from "../../ui/components/cardProduct/CardProduct";

const ProductRelated: React.FC<{categoryId: string}> = ({ categoryId }) => {

    const { data:relatedProducts } = useFetch<TypeProduct>(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&limit=20`);

    return (
        <div className="px-2 border-black">
            <h2 className="text-2xl p-4">Produtos da mesma categoria</h2>

            <div className="flex overflow-hidden overflow-x-auto gap-x-2 p-3">
                {relatedProducts && 
                    relatedProducts.results.map(product=> (
                        <CardProduct key={product.id + 1} product={product} classNames="flex-shrink-0 w-52 md:w-64"/>
                    ))
                }
            </div>
        </div>
    )
}
export default ProductRelated;