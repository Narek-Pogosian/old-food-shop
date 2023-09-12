import { categoryData } from "@/lib/data/category-options";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="pt-24 pb-12 ">
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Shop by category
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categoryData.map((category) => (
          <Link
            href={`/shop?category=${category.category}`}
            className="flex justify-center"
          >
            <li
              key={category.category}
              style={{ backgroundImage: `url(${category.image})` }}
              className={`h-[400px] bg-cover bg-blend-multiply bg-gray-500 rounded p-6 w-[300px] flex items-center justify-center 
                hover:bg-gray-600 transition-colors
              `}
            >
              <span className="text-2xl font-semibold tracking-wider text-white capitalize">
                {category.category}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
