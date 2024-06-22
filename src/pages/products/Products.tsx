import useFetch from "../../model/hooks/useFetch";
import CardProduct from "../../ui/components/cardProduct/CardProduct";
import { useLocation } from "react-router-dom";
import Loading from "../../ui/components/loading/Loading";
import Error from "../../ui/components/error/Error";

interface ProductType {
  id: string;
  title: string;
  price: number;
  original_price: number;
  available_quantity: number;
  thumbnail: string;
  permalink: string;
  condition: string;
}

interface ApiResponse {
  results: ProductType[];
}

const Products: React.FC = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search') || '';

    const page:number = 0;
    const itemsPerPage:number = 20;

    const { data, error, loading } = useFetch<ApiResponse>(`https://api.mercadolibre.com/sites/MLB/search?q=${search.trim()}&limit=${itemsPerPage}&offset=${page}`);

    if (loading) return (<Loading/>);
    if (error) return (<Error/>);

    return (
        <section className="min-h-screen">
            <div className="grid grid-cols-2 sm:grid-cols-auto-fit gap-0 sm:gap-1 md:gap-4 my-8 p-1 sm:p-2">
                {data?.results.map(product=> <CardProduct key={product.id} product={product}/>)}
            </div>
        </section>
    )
}

export default Products;