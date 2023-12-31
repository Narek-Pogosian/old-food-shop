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
import { SortOptionValue, sortOptions } from "@/lib/data/sorting-options";
import { setSortQuery } from "@/lib/helpers/searchparams";
import { useRouter } from "next/navigation";

type Props = {
  initalValue: SortOptionValue;
};

/**
 * ! Values in radix-select can only be strings thats why we stringify
 */

const SortingSelect = ({ initalValue }: Props) => {
  const router = useRouter();

  const defaultValue =
    initalValue.dir && initalValue.orderBy ? JSON.stringify(initalValue) : "";

  return (
    <div className="space-y-1">
      <div aria-hidden className="mb-1 text-sm font-semibold">
        Sort by
      </div>
      <Select
        defaultValue={defaultValue}
        onValueChange={(value) => {
          router.push(setSortQuery(value ? JSON.parse(value) : ""));
        }}
      >
        <SelectTrigger className="xs:w-[180px]" aria-label="Sorting options">
          <SelectValue placeholder="Sort by" className="capitalize" />
        </SelectTrigger>
        <SelectContent
          // Fixes bubbling issue on mobile device
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => e.preventDefault();
          }}
        >
          <SelectGroup>
            {sortOptions.map((option) => (
              <SelectItem
                // Makes sure Release Ascending has "" as value
                value={option.value ? JSON.stringify(option.value) : ""}
                className="capitalize"
                key={JSON.stringify(option.label)}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingSelect;
