import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import SkeletonProduct from "@components/skeletonProduct/SkeletonProduct";
import FilterProducts from "@components/filtersProducts/FiltersProducts";
import Loading from "@components/loading/Loading";
import Error from "@components/error/Error";
import ButtonsPagination from "@components/buttonsPagination/ButtonsPagination";
import Category from "@components/category/Category";

import GetProductsPerCategory from "@api/GetProductsPerCategory";
import GetCategories from "@api/GetCategories";

const CardProduct = lazy(()=> import("@components/cardProduct/CardProduct"));

const ProductsByCategory = () => {
    const [searchParams] = useSearchParams();
    const itemsPerPage: number = 40;

    const categoryId = searchParams.get('search');
    const page:number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    const { data, error, isLoading } = GetProductsPerCategory(categoryId || "", page, itemsPerPage);
    const { data: categories, error: errorCategories, isLoading: loadingCategories } = GetCategories();

    if (isLoading || loadingCategories) return (<Loading/>);
    if (error || errorCategories) return (<Error/>);
    if(data?.results.length === 0) return <main className="h-[80vh]"><h1 className="mx-auto font-bold text-2xl text-center mt-20">Não encontramos o produto!!</h1></main>; 
    
    const totalPages: number = Math.ceil(data?.paging.total as number / itemsPerPage);

    return ( 
        <main>
            <div className="min-h-screen block md:flex">

                {data && <FilterProducts filters={data?.available_filters} />}

                <section className="w-full overflow-hidden">
                    {data && <ButtonsPagination currentPage={page} totalPages={totalPages} />}

                    <div className="p-3">
                        <div className='space-x-2 overflow-x-auto p-2 bg-white'>
                            {categories &&
                                categories.map(category => <Category key={category.id} category={category} classNames="p-2 text-nowrap text-xs rounded-md" />)
                            }
                        </div>
                    </div>
                    
                        <Suspense fallback={
                            <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
                                {Array.from({ length: itemsPerPage }).map((_, index) => (
                                    <SkeletonProduct key={index} classNames="max-w-sm w-full"/>
                                ))}
                            </div>
                        }>
                            <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
                                {data?.results.map(product => (
                                        <CardProduct key={product.id} product={product} />
                                    ))}
                            </div>
                        </Suspense>

                    {data && <ButtonsPagination currentPage={page} totalPages={totalPages} />}
                </section>
            </div>
        </main>
     );
}
 
export default ProductsByCategory;