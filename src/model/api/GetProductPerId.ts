import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../@types/TypeProduct";

const GetProductPerId = (productId: string) => {
    const { data, isLoading, error } = useQuery<ProductType>({
        queryKey: ["items", productId],
        queryFn: async () => {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            return response.data;
        },
        staleTime: 10000,
    });
    
    return { data, isLoading, error };
}
 
export default GetProductPerId;