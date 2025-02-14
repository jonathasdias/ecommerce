import Slideshow from "./Slideshow";
import Loading from '../../ui/components/loading/Loading';
import Error from '../../ui/components/error/Error';
import CarouselProducts from '../../ui/components/carouselProducts/CarouselProducts';
import GetCategories from "../../model/api/getCategories";
import GetProductsPerCategory from "../../model/api/GetProductsPerCategory";

const Home: React.FC = () => {

    // Adicionar a nova forma de consumir a api nos outros componentes

    const categoryIds = {
        vehicle: "MLB5672",
        personalCare: "MLB1246"
    }

    const { data: vehicleProducts, error: errorVehicleProducts, isLoading: loadingVehicleProducts } = GetProductsPerCategory(categoryIds.vehicle);
    const { data: personalCare, error: errorPersonalCare, isLoading: loadingPersonalCare } = GetProductsPerCategory(categoryIds.personalCare);
    const { data: categories, error: errorCategories, isLoading: loadingCategories } = GetCategories();

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