import Slideshow from "./Slideshow";
import Loading from '../../ui/components/loading/Loading';
import Error from '../../ui/components/error/Error';
import CarouselProducts from '../../ui/components/carouselProducts/CarouselProducts';
import GetCategories from "../../model/api/GetCategories";
import GetProductsPerCategory from "../../model/api/GetProductsPerCategory";
import Category from "../../ui/components/category/Category";

const Home: React.FC = () => {

    // Lembrar de corrigir filtersProducts e ver se cabe colocar na pasta components
    // Testar de colocar a lista de categorias no topo da exibição dos produtos da pagina de pesquisa e de categorias
    // Quando finalizar as melhorias lembrar de rodar npm run build para gerar o build final

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
                        categories.map(category => <Category key={category.id} category={category} />)
                    }
                </div>
            </section>

            <CarouselProducts itemsCarousel={vehicleProducts?.results || []} title="Para seu veículo"/>

            <CarouselProducts itemsCarousel={personalCare?.results || []} title="Cuidado pessoal"/>
        </main>
    )
}

export default Home;