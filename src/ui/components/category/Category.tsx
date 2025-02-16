import { Link, useSearchParams } from "react-router-dom";

interface TypeCategory {
  id: string;
  name: string;
}

const Category: React.FC<{ category: TypeCategory, classNames: string }> = ({ category, classNames }) => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('search');

  return (
    <Link
      to={`/products/categories?search=${category.id}&page=1`}
      className={`${classNames} ${categoryId === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
    >
      {category.name}
    </Link>
  );
};

export default Category;