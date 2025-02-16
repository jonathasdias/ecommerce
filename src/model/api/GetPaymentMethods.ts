import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface TypePayment {
    id: string,
    name: string,
    payment_type_id: string,
    thumbnail: string,
    secure_thumbnail: string
}

const GetPaymentMethods = () => {
    const { data, isLoading, error } = useQuery<TypePayment[]>({
        queryKey: ["paymentMethods"],
        queryFn: async () => {
            const response = await axios.get("https://api.mercadolibre.com/sites/MLB/payment_methods");
            return response.data;
        },
        staleTime: 10000,
    });

    return { data, isLoading, error };
}
 
export default GetPaymentMethods;