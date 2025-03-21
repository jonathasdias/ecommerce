import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiResponseType from "../@types/TypeProduct";

const GetProductsPerCategory = (categoryName: string, skip: number = 0, limit: number = 10) => {
    const { data, isLoading, error } = useQuery<ApiResponseType>({
        queryKey: ["productsPerCategory", categoryName, skip, limit],
        queryFn: async () => {
            const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}?&skip=${skip}&limit=${limit}`);
            return response.data;
        },
        staleTime: 10000,
    });

    return { data, isLoading, error };
}

export default GetProductsPerCategory;