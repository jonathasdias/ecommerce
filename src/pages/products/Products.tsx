import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import Loading from "../../ui/components/loading/Loading";
import Error from "../../ui/components/error/Error";
import ButtonsPagination from "../../ui/components/buttonsPagination/ButtonsPagination";
import FilterProducts from "../../ui/components/filtersProducts/FiltersProducts";
import SkeletonProduct from "../../ui/components/skeletonProduct/SkeletonProduct";
import GetSearchProducts from "../../model/api/GetSearchProducts";

const Products: React.FC = () => {

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const itemsPerPage: number = 40;
  const page:number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const { data, error, isLoading } = GetSearchProducts(search, page, itemsPerPage);


  if (isLoading) return (<Loading />);
  if (error) return (<Error />);
  if(data?.results.length === 0) return <main className="h-[80vh]"><h1 className="mx-auto font-bold text-2xl text-center mt-20">Não encontramos o produto!!</h1></main>; 

  const CardProduct = lazy(()=> import("../../ui/components/cardProduct/CardProduct"))
  const totalPages: number = Math.ceil(data?.paging.total as number / itemsPerPage);

  return (
    <main>
      <div className="min-h-screen block md:flex">

        {data && <FilterProducts filters={data?.available_filters} />}

        <section className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
              {data?.results.map(product => (
                <Suspense key={product.id} fallback={<SkeletonProduct classNames="max-w-sm w-full"/>}>
                  <CardProduct product={product} />
                </Suspense>
              ))}
          </div>

          {data && <ButtonsPagination currentPage={page} totalPages={totalPages} />}
        </section>
      </div>
    </main>
  )
}

export default Products;