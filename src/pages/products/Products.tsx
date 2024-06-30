import useFetch from "../../model/hooks/useFetch";
import { useLocation } from "react-router-dom";
import Loading from "../../ui/components/loading/Loading";
import Error from "../../ui/components/error/Error";
import ButtonsPagination from "../../ui/components/buttonsPagination/ButtonsPagination";
import { useState } from "react";
import ApiResponseType from "../../model/@types/TypeProduct";
import FilterProducts from "./filtersProducts/FiltersProducts";
import { lazy, Suspense } from "react";
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

  if(data?.results.length === 0) return "Não econtramos o produto"; 

  const CardProduct = lazy(()=> import("../../ui/components/cardProduct/CardProduct"))

  const totalPages: number = Math.ceil(data?.paging.total as number / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="min-h-screen block md:flex">

        {data && <FilterProducts filters={data?.available_filters} results={data?.results}/>}

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
              {data?.results.map(product => (
                <Suspense key={product.id} fallback={<SkeletonProduct />}>
                  <CardProduct product={product} />
                </Suspense>
              ))}
          </div>
        </div>


      </div>

      {data && <ButtonsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </section>
  )
}

export default Products;