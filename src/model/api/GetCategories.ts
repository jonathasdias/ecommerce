import axios, { CancelTokenSource } from "axios";
import { useQuery } from "@tanstack/react-query";

interface TypeCategory {
  id: string;
  name: string;
}

const GetCategories = () => {
  const source: CancelTokenSource = axios.CancelToken.source();

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios({
        url: "https://api.mercadolibre.com/sites/MLB/categories",
        cancelToken: source.token,
      });
      const data: TypeCategory[] = response.data;
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
};

export default GetCategories;