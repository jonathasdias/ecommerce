import Slideshow from "../../ui/components/slideshow/Slideshow";
import CardProduct from "../../ui/components/cardProduct/CardProduct";
import useFetch from "../../model/hooks/useFetch";
import TypeProduct from '../../model/@types/TypeProduct';
import 'swiper/swiper-bundle.css';

const Home: React.FC = ()=> {

    const quantityItems:number = 10;

    const { data, error, loading } = useFetch<TypeProduct>(`https://api.mercadolibre.com/sites/MLB/search?category=MLB5672&limit=${quantityItems}`)

    if (loading) return <div className="p-4 text-2xl text-center">Carregando...</div>;
    if (error) return <div className="p-4 text-2xl text-center">{error}</div>;

    return (
        <main className="flex flex-col flex-nowrap gap-20">
            <section>
                <Slideshow />
            </section>
            
            <section className="bg-white p-6">
                <h2 className="text-3xl mb-4">Mais relevantes</h2>

                <swiper-container
                    slides-per-view="4"
                    navigation="true"
                    space-between="20"
                    slides-per-group= "4"
                >
                    {data?.results.map((product, i)=> (
                        <CardProduct key={i + 1} product={product} classNames="swiper-slide"/>
                    ))}
                </swiper-container>
             
            </section>

            <section className="p-6 bg-white">

                <p>Alguma informação que leve para About.</p>

            </section>

            <section className="p-6 bg-white mb-4">

                <p>Alguma informação que leve para Products.</p>

            </section>
        </main>
    )
}
export default Home;