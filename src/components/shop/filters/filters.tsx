"use client";

import CategorySelect from "./category-select";
import { SearchParamsSchemaType } from "@/lib/validations/search-params-validation";
import SortingSelect from "./sorting-select";

const Filters = ({
  searchParams,
}: {
  searchParams: SearchParamsSchemaType;
}) => {
  return (
    <div className="flex flex-col gap-4 pb-6 xs:flex-row xs:gap-6">
      <CategorySelect initalValue={searchParams.category} />
      <SortingSelect
        initalValue={{ orderBy: searchParams.orderBy, dir: searchParams.dir }}
      />
    </div>
  );
};

export default Filters;
