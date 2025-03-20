import { Link, useSearchParams } from "react-router-dom";

interface TypeCategory {
  slug: string,
  name: string,
}

const Category: React.FC<{ category: TypeCategory, classNames: string }> = ({ category, classNames }) => {
  const [searchParams] = useSearchParams();
  const searchedCategory = searchParams.get('search');

  return (
    <Link
      to={`/products/categories?search=${category.slug}&page=1`}
      className={`${classNames} ${searchedCategory === category.slug ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
    >
      {category.name}
    </Link>
  );
};

export default Category;