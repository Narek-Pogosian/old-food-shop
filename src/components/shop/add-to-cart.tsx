"use client";

import { Product } from "@prisma/client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCartContext from "@/hooks/use-cart-context";
import { toast } from "../ui/use-toast";

type Props = {
  product: Product;
};

const AddToCart = ({ product }: Props) => {
  const { addToCart } = useCartContext();

  const handleAdd = () => {
    addToCart({ product: product, productId: product.id, quantity: 1 });
    toast({ description: `${product.name} added to cart` });
  };

  return (
    <Button size="icon" onClick={handleAdd}>
      <ShoppingCart className="w-5 h-5" strokeWidth={2} />
    </Button>
  );
};

export default AddToCart;
