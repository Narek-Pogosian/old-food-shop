"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryOptions } from "@/lib/data/category-options";
import { setCategoryQuery } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  initalValue: Category | undefined;
};

const CategorySelect = ({ initalValue }: Props) => {
  const router = useRouter();

  return (
    <Select
      defaultValue={initalValue}
      onValueChange={(value: Category) => {
        router.push(setCategoryQuery(value));
      }}
    >
      <SelectTrigger className="xs:w-[180px]">
        <SelectValue placeholder="Filter by category" className="capitalize" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="">All</SelectItem>
          {categoryOptions.map((category) => (
            <SelectItem value={category} className="capitalize" key={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
