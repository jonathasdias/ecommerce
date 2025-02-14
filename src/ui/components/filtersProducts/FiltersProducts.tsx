import { useState } from "react";
import { FiltersType } from "../../../model/@types/TypeProduct";
import FilterDetails from "./FilterDetails";
import FilterProductsMobile from "./FilterProductsMobile";

const FilterProducts: React.FC<{ filters: FiltersType[] }> = ({ filters }) => {

    const [viewMore, setViewMore] = useState<boolean>(false);

    return (
        <section>
            <FilterProductsMobile filters={filters} />

            <div className="min-w-52 w-full p-2 lg:p-4 space-y-6 hidden md:block">

                <h1 className="text-3xl font-black">Filtros</h1>

                <div className={`${viewMore ? "h-auto" : "h-[180vh]"} relative space-y-4 pb-16 overflow-hidden`}>
                    {filters.map(filtro => (
                        filtro.name === "Preço" ?

                            <div key={filtro.id}>
                                <FilterDetails filtro={filtro} />

                                <div className="mt-2"> 
                                    <div className="flex items-center">
                                        <input type="number" className="w-full p-1 rounded" min={0} placeholder="Máximo" />

                                        <span className="mx-2">-</span>

                                        <input type="number" className="w-full p-1 rounded" min={0} placeholder="Mínimo" />
                                    </div>

                                    <button className="bg-green-600 px-1 rounded mt-2">Aplicar</button>
                                </div>

                            </div>

                            : <FilterDetails key={filtro.id} filtro={filtro} />
                    ))}
                    <button onClick={() => setViewMore(viewMore => !viewMore)} className="absolute bottom-0 left-0 right-0 py-2 text-white font-bold bg-black opacity-80">
                        {viewMore ? "Ver menos" : "Ver mais"}
                    </button>
                </div>

            </div>
        </section>
    )
}
export default FilterProducts;