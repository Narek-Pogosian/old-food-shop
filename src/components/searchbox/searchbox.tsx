"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { Product } from "@prisma/client";
import { getBaseUrl } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { useRouter } from "next/navigation";
import SearchProductItem from "./search-product-item";

type Props = {
  setIsOpen: (val: boolean) => void;
};

const Searchbox = ({ setIsOpen }: Props) => {
  const router = useRouter();
  const [results, setResults] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  // ! Probably change to search with form and onSubmit

  useEffect(() => {
    if (debouncedQuery.trim()) {
      setIsFetching(true);
      fetch(`${getBaseUrl()}/api/search?q=${debouncedQuery}`)
        .then((res) => res.json())
        .then(setResults)
        .finally(() => setIsFetching(false));
    }
  }, [debouncedQuery]);

  const handleNavigation = (id: string) => {
    router.push(`/product/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="search"
        placeholder="Search by name..."
        autoComplete="off"
      />

      <div className="h-6 my-2">
        {isFetching && <p className="font-semibold text-center">Fetching...</p>}
      </div>

      {!!results.length && (
        <ScrollArea className="relative @container" type="always">
          <ul className="h-[350px] grid @sm:grid-cols-2 gap-4 px-3 py-1">
            {results.map((product) => (
              <button
                className="h-fit"
                aria-label={`Navigate to ${product.name}`}
                onClick={() => handleNavigation(product.id)}
                key={product.id}
              >
                <SearchProductItem product={product} />
              </button>
            ))}
          </ul>
        </ScrollArea>
      )}

      {!query.trim() && !isFetching ? (
        <p className="text-center">Enter a query</p>
      ) : (
        query.trim() &&
        !results.length && <p className="text-center">No results found</p>
      )}
    </>
  );
};

export default Searchbox;
