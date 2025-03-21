import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "../@types/TypeProduct";

const GetSearchProducts = (search: string, skip: number = 0, limit: number = 10) => {
    const { data, isLoading, error } = useQuery<ApiResponseType>({
        queryKey: ["searchProducts", skip, search],
        queryFn: async () => {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${search.trim()}&limit=${limit}&skip=${skip}`);
            return response.data;
        },
        staleTime: 10000,
    });

    return { data, isLoading, error };
}
 
export default GetSearchProducts;