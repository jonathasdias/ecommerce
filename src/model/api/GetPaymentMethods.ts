import axios, { CancelTokenSource } from "axios";
import { useQuery } from "@tanstack/react-query";

interface TypePayment {
    id: string,
    name: string,
    payment_type_id: string,
    thumbnail: string,
    secure_thumbnail: string
}

const GetPaymentMethods = () => {
    
    const source: CancelTokenSource = axios.CancelToken.source();

    const { data, isLoading, error } = useQuery<TypePayment[]>({
        queryKey: ["paymentMethods"],
        queryFn: async () => {
            const response = await axios({
                url: "https://api.mercadolibre.com/sites/MLB/payment_methods",
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
 
export default GetPaymentMethods;