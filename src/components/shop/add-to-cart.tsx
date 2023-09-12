"use client";

import { Product } from "@prisma/client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCartContext from "@/hooks/use-cart-context";

type Props = {
  product: Product;
};

const AddToCart = ({ product }: Props) => {
  const { addToCart } = useCartContext();

  return (
    <Button
      size="icon"
      onClick={() =>
        addToCart({ product: product, productId: product.id, quantity: 1 })
      }
    >
      <ShoppingCart className="w-5 h-5" strokeWidth={2} />
    </Button>
  );
};

export default AddToCart;
