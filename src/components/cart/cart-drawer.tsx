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
import CartItemCard from "./cart-item";
import useIsMounted from "@/hooks/use-is-mounted";
import { getTotalPrice } from "@/lib/helpers/currency";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useCartContext();
  const isMounted = useIsMounted();
  const router = useRouter();

  const navigateToCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <span className="sr-only">Open shopping cart</span>
          <ShoppingCart />
          {/* Fixes hydration warning */}
          {isMounted && cartItems.length > 0 && (
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
          <Button
            className="w-full text-base font-semibold tracking-wider"
            disabled={cartItems.length === 0}
            onClick={navigateToCheckout}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
