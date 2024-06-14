// import useFetch from "./hooks/useFetch";
// import CardProduct from "./components/cardProduct/CardProduct";

// interface ProductType {
//   id: string;
//   title: string;
//   price: number;
//   original_price: number;
//   available_quantity: number;
//   thumbnail: string;
//   permalink: string;
//   condition: string;
// }

// interface ApiResponse {
//   results: ProductType[];
// }

const Products: React.FC = () => {

    // const page:number = 0;
    // const itemsPerPage:number = 20;
    // const search = "tablet";

    // const { data, error, loading } = useFetch<ApiResponse>(`https://api.mercadolibre.com/sites/MLB/search?q=${search}&limit=${itemsPerPage}&offset=${page}`);

    // if (loading) return <div className="p-4 text-2xl text-center">Carregando...</div>;
    // if (error) return <div className="p-4 text-2xl text-center">{error}</div>;

    return (
        <h1>Products Page</h1>
        // <section>
        //     <h1 className="grid place-items-center px-4 h-20 text-2xl bg-black text-blue-700">Produtos</h1>

        //     <div className="grid grid-cols-5 gap-4 mt-8">
        //         {data?.results.map(product=> <CardProduct product={product}/>)}
        //     </div>
        // </section>
    )
}

export default Products;