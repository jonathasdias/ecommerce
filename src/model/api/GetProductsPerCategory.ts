import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "../@types/TypeProduct";

const GetProductsPerCategory = (categoryId: string, offset: number = 0, limit: number = 10) => {
    const { data, isLoading, error } = useQuery<ApiResponseType>({
        queryKey: ["productsPerCategory", categoryId, offset, limit],
        queryFn: async () => {
            const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&offset=${offset}&limit=${limit}`);
            return response.data;
        },
        staleTime: 10000,
    });

    return { data, isLoading, error };
}
 
export default GetProductsPerCategory;