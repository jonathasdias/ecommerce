import useFetch from "../../model/hooks/useFetch";
import { useParams } from "react-router-dom";
import 'swiper/swiper-bundle.css'
import SliderDesc from "./SliderDesc";
import TypeProductDeatils from "../../model/@types/TypeProductDetails";
import formatter from "../../model/utils/formatPrice";
import RandomStars from "../../ui/components/randomStars/RandomStars";

// Colocar tudo isso em types, criar uma pasta para productDetails.
// Colocar o tipo somante das informações que irei utilizar.

const ProductDetails: React.FC = () => {

    const { productId } = useParams();

    const { data, error, loading } = useFetch<TypeProductDeatils>(`https://api.mercadolibre.com/items/${productId}`)

    if (loading) return <div className="p-4 text-2xl text-center">Carregando...</div>;
    if (error) return <div className="p-4 text-2xl text-center">Erro</div>;

    console.log(data);

    const discountAmount:number = data ? (data?.original_price - data?.price) : 0;
    const discount:string = data ? ((discountAmount / data?.original_price) * 100).toFixed(0) + "%" : "";

    return (
        <main className="min-h-screen p-6 flex flex-col text-lg">
            {
                data && 
                <section className="flex items-center w-full min-h-[31rem] bg-white p-2 rounded-lg shadow-xl">
                    {data && <SliderDesc pictures={data?.pictures} thumbnail={data?.thumbnail}/>}
                    
                    <div className="p-6">
                        <h2 className="text-2xl">{data?.title}</h2>

                        <div className="my-6 flex justify-between items-center">
                            <div>
                                {data.original_price && <span className="text-red-700 line-through text-sm md:text-base">{formatter.format(data?.original_price)}</span>}
                                <p className="text-2xl md:text-5xl">{formatter.format(data.price)}</p>
                            </div>

                            <RandomStars classNames="md:text-2xl"/>
                        </div>

                        <button className="flex justify-between py-2 px-6 rounded-md bg-green-700 hover:bg-green-600">
                                Adicionar ao carrinho
                        </button>

                        <div className="flex flex-nowrap mt-4">
                            <div className="w-1/2">
                                <h2 className="mb-4 text-xl">Mais detalhes do produto</h2>

                                <ul className="list-disc ps-6 space-y-2 break-words">
                                    <li>{data.warranty ? data.warranty : "Sem Garantia"}.</li>
                                    <li>Estoque: {data.initial_quantity}.</li>
                                    {data.original_price && <li>{discount} de desconto.</li>}
                                    {data.original_price && <li>Valor economizado: {formatter.format(discountAmount)}.</li>}
                                </ul>
                            </div>

                            <div className="w-1/2">
                                <h2 className="mb-4 text-xl">Formas de pagamento</h2>

                                <ul className="list-disc ps-6 space-y-2 break-words">
                                    <li>{data.warranty ? data.warranty : "Sem Garantia"}.</li>
                                    <li>Estoque: {data.initial_quantity}.</li>
                                    {data.original_price && <li>{discount} de desconto.</li>}
                                    {data.original_price && <li>Valor economizado: {formatter.format(discountAmount)}.</li>}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            }

            <section>
                <div>
                    {/* Tabela de informações do produto atributos */}
                </div>

                <div>
                    {/* slider de mais produtos */}
                </div>

                <div>
                    {/* comentarios */}
                </div>
            </section>

        </main>
    )
}
export default ProductDetails;