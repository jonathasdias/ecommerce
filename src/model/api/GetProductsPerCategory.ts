import axios, { CancelTokenSource } from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "../@types/TypeProduct";

const GetProductsPerCategory = (categoryId: string, offset: number = 0, limit: number = 10) => {

    const source: CancelTokenSource = axios.CancelToken.source();

    const { data, isLoading, error } = useQuery<ApiResponseType>({
        queryKey: ["productsPerCategory", categoryId, offset, limit],
        queryFn: async () => {
            const response = await axios({
                url: `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&offset=${offset}&limit=${limit}`,
                cancelToken: source.token,
            });
            return response.data;
        },
        staleTime: 10000,
    });

    if (error) {
        if (axios.isCancel(error)) {
          console.log("Solicitação cancelada", error.message);
        }
    }

    return { data, isLoading, error };
}
 
export default GetProductsPerCategory;