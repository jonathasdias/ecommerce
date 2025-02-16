import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface TypeCategory {
  id: string;
  name: string;
}

const GetCategories = () => {
  const { data, isLoading, error } = useQuery<TypeCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("https://api.mercadolibre.com/sites/MLB/categories");
      return response.data;
    },
    staleTime: 10000,
  });

  return { data, isLoading, error };
};

export default GetCategories;