import axios, { CancelTokenSource } from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "../@types/TypeProduct";

const GetSearchProducts = (search: string, offset: number = 1, limit: number = 20) => {

    const source: CancelTokenSource = axios.CancelToken.source();

    const { data, isLoading, error } = useQuery({
        queryKey: ["searchProducts", offset, search],
        queryFn: async () => {
            const response = await axios({
                url: `https://api.mercadolibre.com/sites/MLB/search?q=${search.trim()}&offset=${offset}&limit=${limit}`,
                cancelToken: source.token,
            });
            const data:ApiResponseType = response.data;
            return data;
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
 
export default GetSearchProducts;