import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "../@types/TypeProduct";

const GetSearchProducts = (search: string, offset: number = 1, limit: number = 20) => {
    const { data, isLoading, error } = useQuery<ApiResponseType>({
        queryKey: ["searchProducts", offset, search],
        queryFn: async () => {
            const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${search.trim()}&offset=${offset}&limit=${limit}`);
            return response.data;
        },
        staleTime: 10000,
    });

    return { data, isLoading, error };
}
 
export default GetSearchProducts;