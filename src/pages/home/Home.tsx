import Slideshow from "./Slideshow";
import Loading from '@components/loading/Loading';
import Error from '@components/error/Error';
import CarouselProducts from '@components/carouselProducts/CarouselProducts';
import GetCategories from "@api/GetCategories";
import GetProductsPerCategory from "@api/GetProductsPerCategory";
import Category from "@components/category/Category";

const Home: React.FC = () => {
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
                    {categories &&
                        categories.map(category => <Category key={category.id} category={category} classNames="p-4 text-nowrap text-sm md:text-lg bg-gray-200 rounded-md" />)
                    }
                </div>
            </section>

            <CarouselProducts itemsCarousel={vehicleProducts?.results || []} title="Para seu veículo"/>

            <CarouselProducts itemsCarousel={personalCare?.results || []} title="Cuidado pessoal"/>
        </main>
    )
}

export default Home;