"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent w-9 md:w-auto md:mr-4"
        >
          <span className="flex items-center gap-2">
            <Search className="w-5 h-5 md:h-4 md:w-4" />
            <span className="hidden md:inline">Search for product</span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Coming Soon</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
