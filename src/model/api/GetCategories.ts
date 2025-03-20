import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface TypeCategory {
  slug: string,
  name: string,
}

const GetCategories = () => {
  const { data, isLoading, error } = useQuery<TypeCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("https://dummyjson.com/products/categories");
      return response.data;
    },
    staleTime: 10000,
  });

  return { data, isLoading, error };
};

export default GetCategories;