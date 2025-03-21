import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import Loading from "@components/loading/Loading";
import Error from "@components/error/Error";
import ButtonsPagination from "@components/buttonsPagination/ButtonsPagination";
import SkeletonProduct from "@components/skeletonProduct/SkeletonProduct";
import GetSearchProducts from "@api/GetSearchProducts";

const CardProduct = lazy(()=> import("@components/cardProduct/CardProduct"))

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const itemsPerPage: number = 10;
  const page:number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const { data, error, isLoading } = GetSearchProducts(search, page, itemsPerPage);


  if (isLoading) return (<Loading />);
  if (error) return (<Error />);
  if((data?.products?.length ?? 0) === 0) return <main className="h-[80vh]"><h1 className="mx-auto font-bold text-2xl text-center mt-20">Não encontramos o produto!!</h1></main>; 

  const totalPages: number = Math.ceil(data?.total as number / itemsPerPage);

  return (
    <main>
      <div className="min-h-screen">

        <section className="w-full">
        {itemsPerPage < (data?.total as number) ? <ButtonsPagination currentPage={page} totalPages={totalPages} /> : ""}

          <Suspense fallback={
            <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <SkeletonProduct key={index} classNames="max-w-sm w-full"/>
              ))}
            </div>
          }>
            <div className="grid grid-cols-2 sm:grid-cols-auto-fill gap-0 sm:gap-1 w-full md:gap-2 my-8 p-1 sm:p-2">
                {data?.products.map(product => (
                    <CardProduct key={product.id} product={product} />
                  ))}
            </div>
          </Suspense>

          {itemsPerPage < (data?.total as number) ? <ButtonsPagination currentPage={page} totalPages={totalPages} /> : ""}
        </section>
      </div>
    </main>
  )
}

export default Products;