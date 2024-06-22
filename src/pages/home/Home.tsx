import 'swiper/swiper-bundle.css';
import Slideshow from "../../ui/components/slideshow/Slideshow";
import useFetch from "../../model/hooks/useFetch";
import TypeProduct from '../../model/@types/TypeProduct';
import CardProduct from "../../ui/components/cardProduct/CardProduct";
import Loading from '../../ui/components/loading/Loading';
import Error from '../../ui/components/error/Error';

interface TypeCategories {
    id: string,
    name: string
}

const Home: React.FC = ()=> {
    const quantityItems:number = 10;

    const { data:vehicleProducts, error:errorVehicleProducts, loading:loadingVehicleProducts } = useFetch<TypeProduct>(`https://api.mercadolibre.com/sites/MLB/search?category=MLB5672&limit=${quantityItems}`)
    const { data:personalCare, error:errorPersonalCare, loading:loadingPersonalCare } = useFetch<TypeProduct>(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1246&limit=${quantityItems}`)
    const { data:categories, error:errorCategories, loading:loadingCategories } = useFetch<TypeCategories[]>(`https://api.mercadolibre.com/sites/MLB/categories`)

    if (loadingVehicleProducts || loadingPersonalCare || loadingCategories) return (<Loading/>);
    if (errorVehicleProducts || errorPersonalCare || errorCategories) return (<Error/>);

    return (
        <main className="min-h-screen flex flex-col flex-nowrap gap-16">
            <section>
                <Slideshow />
            </section>

            <section className='bg-white'>
                <h2 className='text-2xl p-4'>Categorias</h2>

                <div className='flex gap-2 p-3 pt-0 overflow-x-auto'>
                    {categories &&
                        categories.map(category => <p key={category.id} className='p-4 text-nowrap bg-gray-200 rounded-md'>{category.name}</p>)
                    }
                </div>
            </section>
            
            <section className="bg-white p-6">
                <h2 className="text-2xl mb-4">Para seu Veículo</h2>

                {vehicleProducts &&
                    <swiper-container
                        slides-per-view="4"
                        navigation="true"
                        space-between="20"
                        slides-per-group= "4"
                    >
                        {vehicleProducts.results.map((product)=> (
                            <CardProduct key={product.id} product={product} classNames="swiper-slide"/>
                        ))}
                    </swiper-container>
                }
             
            </section>

            <section className="p-6 bg-white">

                <h2 className="text-2xl mb-4">Cuidado pessoal</h2>

                {personalCare &&
                    <swiper-container
                        slides-per-view="4"
                        navigation="true"
                        space-between="20"
                        slides-per-group= "4"
                    >
                        {personalCare.results.map((product)=> (
                            <CardProduct key={product.id} product={product} classNames="swiper-slide"/>
                        ))}
                    </swiper-container>
                }
            </section>
        </main>
    )
}
export default Home;