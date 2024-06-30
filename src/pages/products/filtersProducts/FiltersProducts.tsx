// import { useState } from "react";
import { useMemo, useState } from "react";
import { FiltersType, ProductType } from "../../../model/@types/TypeProduct";
import FilterDetails from "./FilterDeatils";
import FilterProductsMobile from "./FilterProductsMobile";

const FilterProducts: React.FC<{ filters: FiltersType[], results: ProductType[] }> = ({ filters, results }) => {

    const [viewMore, setViewMore] = useState<boolean>(false);

    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [minPrice, setMinPrice] = useState<number>(0);

    const filterPerPrice = useMemo(() => {
        const filters = results.filter(product => product.price >= minPrice && product.price <= maxPrice);
        return filters;
    }, [minPrice, maxPrice])

    return (
        <>
            <FilterProductsMobile filters={filters}/>

            <section className="min-w-52 w-1/4 p-2 lg:p-4 space-y-6 hidden md:block">

                <h1 className="text-3xl font-black border-b-2 border-black">Filtros</h1>

                <div className={`${viewMore ? "h-auto" : "h-[180vh]"} relative space-y-4 pb-16 overflow-hidden`}>
                    {filters.map(filtro => (
                        filtro.name === "Preço" ?

                            <div key={filtro.id}>
                                <FilterDetails filtro={filtro}/>

                                <p className="mt-2">
                                    <div className="flex items-center">
                                        <input type="number" onChange={(e) => setMaxPrice(parseFloat(e.target.value))} className="w-full p-1 rounded" min={0} placeholder="Máximo" />

                                        <span className="mx-2">-</span>

                                        <input type="number" onChange={(e) => setMinPrice(parseFloat(e.target.value))} className="w-full p-1 rounded" min={0} placeholder="Mínimo" />
                                    </div>

                                    <button onClick={() => console.log(filterPerPrice)} className="bg-green-600 px-1 rounded mt-2">Aplicar</button>
                                </p>
                            </div>

                            : <FilterDetails filtro={filtro}/>
                    ))}
                    <button onClick={() => setViewMore(viewMore => !viewMore)} className="absolute bottom-0 left-0 right-0 py-2 text-white font-bold bg-black opacity-80">
                        {viewMore ? "Ver menos" : "Ver mais"}
                    </button>
                </div>

            </section>
        </>
    )
}
export default FilterProducts;