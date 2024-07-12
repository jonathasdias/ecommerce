import 'swiper/swiper-bundle.css';
import { ProductType } from '../../../model/@types/TypeProduct';
import { lazy, Suspense } from 'react';
import SkeletonProduct from '../skeletonProduct/SkeletonProduct';

const CarouselProducts: React.FC<{ itemsCarousel: ProductType[], title: string }> = ({ itemsCarousel, title }) => {

    const CardProduct = lazy(()=> import("../cardProduct/CardProduct"));

    return (
        <section className="bg-white p-2 sm:p-6">
            <h2 className="text-lg sm:text-2xl mb-4 p-4">{title}</h2>

            {itemsCarousel &&
                <swiper-container
                    slides-per-view="4"
                    navigation="true"
                    space-between="20"
                    slides-per-group="4"
                    breakpoints={JSON.stringify({
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        481: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    })}
                >
                    {itemsCarousel.map((product) => (
                        <Suspense key={product.id} fallback={<SkeletonProduct classNames='swiper-slide'/>}>
                            <CardProduct product={product} classNames="swiper-slide"/>
                        </Suspense>
                    ))}
                </swiper-container>
            }
        </section>
    )
}
export default CarouselProducts;