import { Link } from "react-router-dom";

interface TypeCategory {
  id: string;
  name: string;
}

const Category: React.FC<{ category: TypeCategory, classNames: string }> = ({ category, classNames }) => {
  return (
    <Link
      to={`/products/categories?search=${category.id}&page=1`}
      className={`${classNames}`}
    >
      {category.name}
    </Link>
  );
};

export default Category;