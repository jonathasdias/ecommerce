// import GetProductsPerCategory from "../../../model/api/GetProductsPerCategory";

import { Link } from "react-router-dom";

interface TypeCategory {
  id: string;
  name: string;
}

const Category: React.FC<{ category: TypeCategory }> = ({ category }) => {

  // const { data } = GetProductsPerCategory(category.id);

  // Criar pagina de produtos por categoria

  return (
    // essa tag sera substituida por um Link para a pagina de produtos por categoria
    <Link
      to={`/products/categories?search=${category.id}&page=1`}
      className="p-4 text-nowrap text-sm md:text-lg bg-gray-200 rounded-md"
    >
      {category.name}
    </Link>
  );
};

export default Category;
