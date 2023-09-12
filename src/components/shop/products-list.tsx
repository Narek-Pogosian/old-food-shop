import { db } from "@/lib/db";
import ProductCard from "./product-card";
import ListGrid from "./list-grid";
import { SearchParamsSchemaType } from "@/lib/validations/searchParams-validation";
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

  return (
    <>
      <ListGrid>
        {products.map((product) => (
          <ProductCard product={product} />
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
