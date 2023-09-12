"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import useCartContext from "@/hooks/use-cart-context";
import CartQuantityBadge from "./cart-quantity-badge";
import { ScrollArea } from "../ui/scroll-area";
import { getTotalPrice } from "@/lib/utils";
import CartItemCard from "./cart-item";
import { useEffect, useState } from "react";

const CartDrawer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { cartItems } = useCartContext();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <span className="sr-only">Open shopping cart</span>
          <ShoppingCart />
          {/* Fixes hydration warning */}
          {isClient && cartItems.length > 0 && (
            <CartQuantityBadge quantity={cartItems.length} />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full pr-0">
        <ScrollArea className="relative flex-1 px-1 py-0">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          {/* List of cart items */}
          <ul className="pt-4 space-y-6">
            {cartItems.map((item) => (
              <CartItemCard cartItem={item} key={item.productId} />
            ))}
          </ul>
        </ScrollArea>
        <div className="h-24 py-2 mr-6 border-t bg-background">
          <p className="mb-4 text-lg font-semibold">
            Total Price: {getTotalPrice(cartItems)}
          </p>
          <Button className="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
