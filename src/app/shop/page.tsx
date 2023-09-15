import PageTitle from "@/components/page-title";
import Filters from "@/components/shop/filters/filters";
import ProductsList from "@/components/shop/products-list";
import SkeletonList from "@/components/shop/skeleton-list";
import {
  SearchParamsSchemaType,
  searchParamsSchema,
} from "@/lib/validations/search-params-validation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export type SearchParams = { [key: string]: string | string[] | undefined };

const Shop = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { success } = searchParamsSchema.safeParse(searchParams);

  if (!success) throw Error;

  return (
    <div className="container">
      <PageTitle>Products List</PageTitle>
      <Filters
        key={Object.values(searchParams).toString() + "filters"}
        searchParams={searchParams as SearchParamsSchemaType}
      />

      <Suspense
        fallback={<SkeletonList />}
        key={Object.values(searchParams).toString()}
      >
        <ProductsList searchParams={searchParams as SearchParamsSchemaType} />
      </Suspense>
    </div>
  );
};

export default Shop;
