import { Product } from "@prisma/client";

export interface SortOptionValue {
  orderBy: keyof Pick<Product, "name" | "price" | "created_at"> | undefined;
  dir: "asc" | "desc" | undefined;
}

interface SortOptionsData {
  value: SortOptionValue | "";
  label: string;
}

export const sortOptions: SortOptionsData[] = [
  { value: { orderBy: "name", dir: "asc" }, label: "Name Ascending" },
  { value: { orderBy: "name", dir: "desc" }, label: "Name Descending" },
  { value: { orderBy: "price", dir: "asc" }, label: "Price Ascending" },
  { value: { orderBy: "price", dir: "desc" }, label: "Price Descending" },
  { value: "", label: "Release Ascending" }, // Default sorting option
  {
    value: { orderBy: "created_at", dir: "desc" },
    label: "Release Descending",
  },
];
