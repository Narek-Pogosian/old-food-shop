import { db } from "@/lib/db";
import ProductCard from "./product-card";
import ListGrid from "./list-grid";
import { SearchParamsSchemaType } from "@/lib/validations/search-params-validation";
import Pagination from "./pagination";

type Props = {
  searchParams: SearchParamsSchemaType;
};

const PAGE_LIMIT = 12;

const ProductsList = async ({ searchParams }: Props) => {
  const { category, dir, orderBy: _orderBy, page } = searchParams;

  const sort = (_orderBy ?? "created_at").toString();
  const orderBy = { [sort]: dir };

  const products = await db.product.findMany({
    where: {
      category: category,
    },
    orderBy,
    take: PAGE_LIMIT,
    skip: page ? (Number(page) - 1) * PAGE_LIMIT : 0,
  });

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-10 pt-24">
        <h2 className="text-3xl font-semibold">No products found!</h2>
      </div>
    );
  }

  return (
    <>
      <ListGrid>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ListGrid>
      <Pagination
        hasNext={products.length === PAGE_LIMIT}
        hasPrevious={Number(searchParams.page) > 1}
        currentPage={searchParams.page ? searchParams.page : 1}
      />
    </>
  );
};

export default ProductsList;
