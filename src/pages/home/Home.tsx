import Slideshow from "./Slideshow";
import useFetch from "../../model/hooks/useFetch";
import ApiResponseType  from '../../model/@types/TypeProduct';
import Loading from '../../ui/components/loading/Loading';
import Error from '../../ui/components/error/Error';
import CarouselProducts from '../../ui/components/carouselProducts/CarouselProducts';
import GetCategories from "../../model/api/getCategories";
import GetProductsPerCategory from "../../model/api/GetProductsPerCategory";

const Home: React.FC = () => {
    const quantityItems: number = 10;
    const categoryIds = {
        vehicle: "MLB5672",
        personalCare: "MLB1246"
    }

    // const { data: categories, error: errorCategories, isLoading: loadingCategories } = useFetch<TypeCategories[]>(`https://api.mercadolibre.com/sites/MLB/categories`)
    // const { data: personalCare, error: errorPersonalCare, isLoading: loadingPersonalCare } = useFetch<ApiResponseType>(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1246&limit=${quantityItems}`)
    const { data: vehicleProducts, error: errorVehicleProducts, isLoading: loadingVehicleProducts } = useFetch<ApiResponseType>(`https://api.mercadolibre.com/sites/MLB/search?category=MLB5672&limit=${quantityItems}`)
    const { data: personalCare, error: errorPersonalCare, isLoading: loadingPersonalCare } = GetProductsPerCategory(categoryIds.personalCare)
    const { data: categories, error: errorCategories, isLoading: loadingCategories } = GetCategories(`https://api.mercadolibre.com/sites/MLB/categories`)

    if (loadingVehicleProducts || loadingPersonalCare || loadingCategories) return (<Loading />);
    if (errorVehicleProducts || errorPersonalCare || errorCategories) return (<Error />);

    return (
        <main className="min-h-screen flex flex-col flex-nowrap gap-16">
            <section>
                <Slideshow />
            </section>

            <section className='bg-white'>
                <h2 className='text-lg sm:text-2xl p-4'>Categorias</h2>

                <div className='flex gap-2 p-3 pt-0 overflow-x-auto'>
                    {/* Criar componente de categorias onde sera passada para o componente os dados de category e fazer eles funcionarem. */}
                    {categories &&
                        categories.map(category => <p key={category.id} className='p-4 text-nowrap text-sm md:text-lg bg-gray-200 rounded-md'>{category.name}</p>)
                    }
                </div>
            </section>

            <CarouselProducts itemsCarousel={vehicleProducts?.results || []} title="Para seu veículo"/>

            <CarouselProducts itemsCarousel={personalCare?.results || []} title="Cuidado pessoal"/>
        </main>
    )
}
export default Home;