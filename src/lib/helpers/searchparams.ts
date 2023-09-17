import { Category } from "@prisma/client";
import { SortOptionValue } from "../data/sorting-options";

export function setCategoryQuery(value: Category | null | undefined) {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set("category", value);
  } else {
    searchParams.delete("category");
  }

  searchParams.delete("page");

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function setSortQuery(value: SortOptionValue | null | undefined) {
  const searchParams = new URLSearchParams(window.location.search);

  if (!value) {
    searchParams.delete("dir");
    searchParams.delete("orderBy");
  } else {
    if (!value?.dir || !value.orderBy) {
      searchParams.delete("dir");
      searchParams.delete("orderBy");
    } else {
      searchParams.set("dir", value.dir);
      searchParams.set("orderBy", value.orderBy);
    }
  }

  searchParams.delete("page");

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export const nextPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get("page");

  if (!currentPage || currentPage === "1") {
    searchParams.set("page", "2");
  } else {
    searchParams.set("page", String(Number(currentPage) + 1));
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
};

export const previousPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get("page");

  if (!currentPage || currentPage === "1") {
    searchParams.set("page", "1");
  } else if (currentPage === "2") {
    searchParams.delete("page");
  } else {
    searchParams.set("page", String(Number(currentPage) - 1));
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
};
