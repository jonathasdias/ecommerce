// import { useState } from "react";

const FilterProducts:React.FC = ()=> {

    // const [maxPrice, setMaxPrice] = useState<number>(0);
    // const [minPrice, setMinPrice] = useState<number>(0);

    // const filterPerPrice = (min:number, max:number) => {
    //     const filters = data?.results.filter(product => product.price >= min && product.price <= max);
    //     console.log(filters);
    //     return filters;
    // }

    return (
        <>
            {/* <section className="md:hidden block">
                colocar no topo da pagina com um botão de abrir o menu de filtros na tela inteira.
            </section> */}

            <section className="min-w-52 w-1/4 p-2 lg:p-4 space-y-10 hidden md:block">

                <h1 className="text-3xl font-black border-b-2 border-black">Filtros</h1>

                <div className="">
                    <h2>Filtrar por preço</h2>

                    <p className="flex items-center mt-2">
                        <input type="number" className="w-full p-1 rounded" placeholder="Máximo"/>

                        <span className="mx-2">-</span>

                        <input type="number" className="w-full p-1 rounded" placeholder="Mínimo"/>
                    </p>
                </div>

                <div className="">
                    <h2>Filtrar por marca</h2>

                    <p className="flex items-center mt-2">
                        <input type="number" className="w-full p-1 rounded" placeholder="Máximo"/>
                    </p>
                </div>

                <div>
                    {/* Filtros da api aqui */}
                </div>

            </section>
        </>
    )
}
export default FilterProducts;