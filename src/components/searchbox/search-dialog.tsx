"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Command, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Searchbox from "./searchbox";

const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="max-md:bg-transparent w-9 md:w-auto md:mr-4 md:bg-accent md:rounded-full md:px-6"
        >
          <span className="flex items-center gap-2">
            <Search className="w-5 h-5 md:h-4 md:w-4" />
            <span className="max-md:sr-only text-muted-foreground">
              Search for product
            </span>
            <span className="flex items-center gap-1 ml-8 text-sm text-muted-foreground max-md:hidden">
              <Command className="w-4 h-4" /> K
            </span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[500px]">
        <DialogTitle>Search for a product</DialogTitle>
        <Searchbox setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
