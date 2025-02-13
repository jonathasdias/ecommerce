import axios, { CancelTokenSource } from "axios";
import { useQuery } from "@tanstack/react-query";

const GetProductsPerCategory = (categoryId: string, offset: number = 0, limit: number = 10,) => {

    const source: CancelTokenSource = axios.CancelToken.source();

    const { data, isLoading, error } = useQuery({
        queryKey: ["productsPerCategory"],
        queryFn: async () => {
            const response = await axios({
                url: `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&offset=${offset}&limit=${limit}`,
                cancelToken: source.token,
            });
            const data = response.data;
            console.log(data);
            
            return data;
        },
    });

    if (error) {
        if (axios.isCancel(error)) {
          console.log("Solicitação cancelada", error.message);
        }
    }

    return { data, isLoading, error };
}
 
export default GetProductsPerCategory;