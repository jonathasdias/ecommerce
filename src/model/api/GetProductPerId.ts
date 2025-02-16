import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProductDetails from "../@types/TypeProductDetails";

const GetProductPerId = (productId: string) => {
    const { data, isLoading, error } = useQuery<ProductDetails>({
        queryKey: ["items", productId],
        queryFn: async () => {
            const response = await axios.get(`https://api.mercadolibre.com/items/${productId}`);
            return response.data;
        },
        staleTime: 10000,
    });
    
    return { data, isLoading, error };
}
 
export default GetProductPerId;