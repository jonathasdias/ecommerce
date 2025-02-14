import { FiltersType } from "../../../model/@types/TypeProduct";
import { IoFilter } from "react-icons/io5";
import { FaX, FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const FilterProductsMobile: React.FC<{ filters: FiltersType[] }> = ({ filters }) => {

    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [openItemFilter, setOpenItemFilter] = useState<string>("");

    function handleOpenFilter() {
        setOpenFilter(true);
        setOpenItemFilter("");
    }

    return (
        <section className="md:hidden block">
            <button type="button" aria-label="abrir filtros" onClick={handleOpenFilter} className=" flex justify-center items-center gap-x-2 text-lg w-full py-4 bg-white">
                Filtros
                <IoFilter />
            </button>

            {openFilter &&
                <div className="absolute top-0 left-0 right-0 z-10 border-t-2 bg-white">

                    <div className="p-8">
                        <button type="button" aria-label="Fechar filtros" onClick={() => setOpenFilter(false)} className="text-xl">
                            <FaX />
                        </button>
                    </div>

                    <h1 className="p-6 text-3xl border-b">Filtrar por</h1>

                    {filters.map(filtro => (
                        <>
                            <h2 onClick={()=> setOpenItemFilter(filtro.id)} className="flex justify-between items-center p-6 border-b">
                                {filtro.name}
                                <FaAngleDown className="text-blue-500" />
                            </h2>

                            <div className={`${openItemFilter === filtro.id ? "p-2 h-auto" : "h-0"} space-y-1 overflow-hidden transition-all ease-in-out`}>
                                {filtro.values.map(value => (
                                    <button type="button" key={value.id} aria-label={"Filtro" + value.name} className="bg-gray-300 text-left py-3 px-8 active:bg-gray-400 w-full rounded">
                                        {value.name} ({value.results})
                                    </button>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            }
        </section>
    )
}
export default FilterProductsMobile;