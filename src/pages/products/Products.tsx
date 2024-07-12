import { useState } from "react";
import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

import ApiResponseType from "../../model/@types/TypeProduct";
import useFetch from "../../model/hooks/useFetch";

import Loading from "../../ui/components/loading/Loading";
import Error from "../../ui/components/error/Error";
import ButtonsPagination from "../../ui/components/buttonsPagination/ButtonsPagination";
import FilterProducts from "./filtersProducts/FiltersProducts";
import SkeletonProduct from "../../ui/components/skeletonProduct/SkeletonProduct";


const Products: React.FC = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('search') || '';

  const itemsPerPage: number = 40;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, loading } = useFetch<ApiResponseType>(`https://api.mercadolibre.com/sites/MLB/search?q=${search.trim()}&limit=${itemsPerPage}&offset=${currentPage}`);

  if (loading) return (<Loading />);
  if (error) return (<Error />);

  if(data?.results.length === 0) return <main className="h-[80vh]"><h1 className="mx-auto font-bold text-2xl text-center mt-20">Não encontramos o produto!!</h1></main>; 

  const CardProduct = lazy(()=> import("../../ui/components/cardProduct/CardProduct"))

  const totalPages: number = Math.ceil(data?.paging.total as number / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <main>
      <div className="min-h-screen block md:flex">

        {data && <FilterProducts filters={data?.available_filters} results={data?.results}/>}

        <section className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
              {data?.results.map(product => (
                <Suspense key={product.id} fallback={<SkeletonProduct classNames="max-w-sm w-full"/>}>
                  <CardProduct product={product} />
                </Suspense>
              ))}
          </div>
        </section>


      </div>

      {data && <ButtonsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </main>
  )
}

export default Products;