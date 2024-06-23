import useFetch from "../../model/hooks/useFetch";
import { useParams } from "react-router-dom";

import TypeProductDetails from "../../model/@types/TypeProductDetails";
import { AppDispatch } from "../../model/redux/store";

import SliderDesc from "./SliderDesc";
import RandomStars from "../../ui/components/randomStars/RandomStars";
import TableAttributes from "./TableAttributes";
import Loading from "../../ui/components/loading/Loading";
import Error from "../../ui/components/error/Error";

import formatter from "../../model/utils/formatPrice";
import ProductRelated from "./ProductRelated";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../model/redux/cart/actions";

interface TypePayment {
    id: string,
    name: string,
    payment_type_id: string,
    thumbnail: string,
    secure_thumbnail: string
}

const ProductDetails: React.FC = () => {
    const { productId } = useParams();

    const dispatch:AppDispatch = useDispatch();

    const { data:detailsProduct, error, loading } = useFetch<TypeProductDetails>(`https://api.mercadolibre.com/items/${productId}`);
    const { data:paymentMethods, error:errorPayment, loading:loadingPayment } = useFetch<TypePayment[]>(`https://api.mercadolibre.com/sites/MLB/payment_methods`);

    if (loading || loadingPayment) return (<Loading/>);
    if (error || errorPayment) return (<Error/>);

    const discountAmount: number = detailsProduct ? (detailsProduct?.original_price - detailsProduct?.price) : 0;
    const discount: string = detailsProduct ? ((discountAmount / detailsProduct?.original_price) * 100).toFixed(0) + "%" : "";

    function handleProductClick(product:TypeProductDetails) {
        dispatch(addProductToCart(product))
    }

    return (
        <main className="min-h-screen p-6 flex flex-col text-lg space-y-6">
            {
                detailsProduct &&
                <section className="flex items-center w-full min-h-[31rem] bg-white p-2 rounded-lg shadow-xl">
                    <SliderDesc pictures={detailsProduct.pictures} thumbnail={detailsProduct.thumbnail} />

                    <div className="p-6">
                        <h2 className="text-2xl">{detailsProduct.title}</h2>

                        <div className="my-6 flex justify-between items-center">
                            <div>
                                {detailsProduct.original_price && <span className="text-red-700 line-through text-sm md:text-base">{formatter.format(detailsProduct?.original_price)}</span>}
                                <p className="text-2xl md:text-5xl">{formatter.format(detailsProduct.price)}</p>
                            </div>

                            <RandomStars classNames="md:text-2xl" />
                        </div>

                        <button onClick={()=> handleProductClick(detailsProduct)} className="flex justify-between py-2 px-6 rounded-md bg-green-700 hover:bg-green-600">
                            Adicionar ao carrinho
                        </button>

                        <div className="flex flex-nowrap mt-4">
                            <div className="w-1/2">
                                <h2 className="mb-4 text-lg">Informações do produto</h2>

                                <ul className="list-disc ps-5 space-y-2 break-words">
                                    <li>{detailsProduct.warranty ? detailsProduct.warranty : "Sem Garantia"}.</li>
                                    <li>Estoque: {detailsProduct.initial_quantity}.</li>
                                    {detailsProduct.original_price && <li>{discount} de desconto.</li>}
                                    {detailsProduct.original_price && <li>Valor economizado: {formatter.format(discountAmount)}.</li>}
                                </ul>
                            </div>

                            <div className="w-1/2">
                                <h2 className="mb-4 text-lg">Formas de pagamento</h2>

                                <ul className="ps-2 flex flex-wrap gap-3">
                                    {paymentMethods?.map(item => (
                                        <li key={item.id + 1} title={item.name}><img src={item.thumbnail} alt={item.name}/></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            }

            {
                detailsProduct &&
                <section className="bg-white rounded-lg">
                    <h2 className="text-2xl p-4">Características do produto</h2>

                    <TableAttributes attributes={detailsProduct.attributes}/>

                    <hr className="my-6 w-1/2 mx-auto"/>

                    <div className="px-2 border-black">
                        <h2 className="text-2xl p-4">Produtos da mesma categoria</h2>

                        <ProductRelated categoryId={detailsProduct.category_id}/>
                    </div>

                    <hr className="my-6 w-1/2 mx-auto"/>

                    <div>
                        {/* comentarios */}
                    </div>
                </section>
            }
        </main>
    )
}
export default ProductDetails;