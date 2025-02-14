import axios, { CancelTokenSource } from "axios";
import { useQuery } from "@tanstack/react-query";
import ProductDetails from "../@types/TypeProductDetails";

const GetProductPerId = (productId: string) => {
     
    const source: CancelTokenSource = axios.CancelToken.source();

    const { data, isLoading, error } = useQuery({
        queryKey: ["items", productId],
        queryFn: async () => {
            const response = await axios({
                url: `https://api.mercadolibre.com/items/${productId}`,
                cancelToken: source.token,
            });
            const data:ProductDetails = response.data;
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
 
export default GetProductPerId;