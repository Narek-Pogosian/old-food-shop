"use client";

import SearchProductItem from "./search-product-item";
import { useState } from "react";
import { Input } from "../ui/input";
import { Product } from "@prisma/client";
import { getBaseUrl } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type Props = {
  setIsOpen: (val: boolean) => void;
};

// TODO: Maybe use a combobox instead, fix the ternary operators mess
const Searchbox = ({ setIsOpen }: Props) => {
  const router = useRouter();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<Product[] | null>(null);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim()) {
      setIsFetching(true);
      fetch(`${getBaseUrl()}/api/search?q=${query}`)
        .then((res) => res.json())
        .then(setResults)
        .catch(() => setError("Something went wrong"))
        .finally(() => setIsFetching(false));
    }
  };

  const handleNavigation = (id: string) => {
    router.push(`/product/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="search"
          placeholder="Search by name..."
          autoComplete="off"
        />
        <Button className="h-auto font-semibold" disabled={isFetching}>
          {isFetching ? (
            <span className="flex items-center">
              <Loader className="w-4 h-4 mr-2 animate-spin" /> Searching
            </span>
          ) : (
            "Search"
          )}
        </Button>
      </form>

      {error ? (
        <p className="text-lg font-semibold text-center pt-14 text-muted-foreground">
          {error}
        </p>
      ) : !results ? (
        <p className="text-lg font-semibold text-center pt-14 text-muted-foreground">
          Search something
        </p>
      ) : !!results.length ? (
        <ScrollArea className="relative mt-4" type="always">
          <ul className="h-[370px] flex flex-col gap-4 px-3">
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
      ) : (
        <p className="text-lg font-semibold text-center pt-14 text-muted-foreground">
          Nothing found
        </p>
      )}
    </>
  );
};

export default Searchbox;
