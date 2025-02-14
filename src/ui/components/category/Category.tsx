// import GetProductsPerCategory from "../../../model/api/GetProductsPerCategory";

interface TypeCategory {
  id: string;
  name: string;
}

const Category: React.FC<{ category: TypeCategory }> = ({ category }) => {

  // const { data } = GetProductsPerCategory(category.id);

  // Criar pagina de produtos por categoria

  return (
    <p
      key={category.id}
      className="p-4 text-nowrap text-sm md:text-lg bg-gray-200 rounded-md"
    >
      {category.name}
    </p>
  );
};

export default Category;
