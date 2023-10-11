"use client";

import useCartContext from "@/hooks/use-cart-context";
import { useState } from "react";
import { Button } from "../ui/button";
import { Product } from "@prisma/client";
import { toast } from "../ui/use-toast";

type Props = {
  product: Product;
};

const AddToCartCounter = ({ product }: Props) => {
  const { addToCart } = useCartContext();

  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleAdd = () => {
    addToCart({ product: product, productId: product.id, quantity: count });
    toast({
      description: `${count > 1 ? count : ""} ${product.name} added to cart`,
    });
    setCount(1);
  };

  return (
    <div className="flex gap-6 pt-6">
      <div className="border rounded w-fit text-muted-foreground">
        <Button
          onClick={decrement}
          variant="ghost"
          size="icon"
          className="text-2xl"
          aria-label="decrement"
        >
          -
        </Button>
        <div
          id="announcer"
          role="region"
          aria-live="assertive"
          className="inline-flex items-center justify-center w-10 text-lg text-primary "
        >
          <span className="sr-only">Current count is</span>
          {count}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={increment}
          className="text-2xl"
          aria-label="increment"
        >
          +
        </Button>
      </div>
      <Button onClick={handleAdd} className="h-auto">
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCartCounter;
