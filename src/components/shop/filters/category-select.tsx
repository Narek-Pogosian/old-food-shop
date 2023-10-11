"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryOptions } from "@/lib/data/category-options";
import { setCategoryQuery } from "@/lib/helpers/searchparams";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  initalValue: Category | undefined;
};

const CategorySelect = ({ initalValue }: Props) => {
  const router = useRouter();

  return (
    <div className="space-y-1">
      <div aria-hidden className="mb-1 text-sm font-semibold">
        Category
      </div>
      <Select
        defaultValue={initalValue}
        onValueChange={(value: Category) => {
          router.push(setCategoryQuery(value));
        }}
      >
        <SelectTrigger className="xs:w-[180px]" aria-label="Filter by category">
          <SelectValue
            placeholder="Filter by category"
            className="capitalize"
          />
        </SelectTrigger>
        <SelectContent
          // Fixes bubbling issue on mobile device
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => e.preventDefault();
          }}
        >
          <SelectGroup>
            <SelectItem value="">All</SelectItem>
            {categoryOptions.map((category) => (
              <SelectItem
                value={category}
                className="capitalize"
                key={category}
              >
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelect;
