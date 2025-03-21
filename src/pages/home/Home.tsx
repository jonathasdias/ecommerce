import Slideshow from "./Slideshow";
import Loading from '@components/loading/Loading';
import Error from '@components/error/Error';
import CarouselProducts from '@components/carouselProducts/CarouselProducts';
import GetCategories from "@api/GetCategories";
import GetProductsPerCategory from "@api/GetProductsPerCategory";
import Category from "@components/category/Category";

const Home: React.FC = () => {
    const categoryIds = {
        sportsAccessories: "sports-accessories",
        kitchenAccessories: "kitchen-accessories"
    }

    const { data: sportsAccessories, error: errorSportsAccessories, isLoading: loadingSportsAccessories } = GetProductsPerCategory(categoryIds.sportsAccessories);
    const { data: kitchenAccessories, error: errorKitchenAccessories, isLoading: loadingKitchenAccessories } = GetProductsPerCategory(categoryIds.kitchenAccessories);
    const { data: categories, error: errorCategories, isLoading: loadingCategories } = GetCategories();

    if (loadingSportsAccessories || loadingKitchenAccessories || loadingCategories) return (<Loading />);
    if (errorSportsAccessories || errorKitchenAccessories || errorCategories) return (<Error />);

    return (
        <main className="min-h-screen flex flex-col flex-nowrap gap-16">
            <section>
                <Slideshow />
            </section>

            <section className='bg-white'>
                <h2 className='text-lg sm:text-2xl p-4'>Categories</h2>

                <div className='flex gap-2 p-3 pt-0 overflow-x-auto'>
                    {categories &&
                        categories.map(category => <Category key={category.slug} category={category} classNames="p-4 text-nowrap text-sm md:text-lg bg-gray-200 rounded-md" />)
                    }
                </div>
            </section>

            <CarouselProducts itemsCarousel={sportsAccessories?.products || []} title="Sports accessories"/>

            <CarouselProducts itemsCarousel={kitchenAccessories?.products || []} title="Kitchen accessories"/>
        </main>
    )
}

export default Home;