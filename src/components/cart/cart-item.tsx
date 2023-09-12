"use client";

import { CartItem } from "@/context/cart-context/cart-types";
import useCartContext from "@/hooks/use-cart-context";
import { currency } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  cartItem: CartItem;
};

const CartItemCard = ({ cartItem }: Props) => {
  const { incrementCartItem, decrementCartItem, deleteFromCart } =
    useCartContext();

  return (
    <li className="space-y-2">
      <Link
        href={`/product/${cartItem.productId}`}
        className="font-semibold hover:underline hover:underline-offset-2"
      >
        {cartItem.product.name}
      </Link>
      <div className="flex gap-2">
        <Image
          src={cartItem.product.imgUrl}
          alt={cartItem.product.name}
          width={120}
          height={50}
          className="rounded"
        />
        <div className="flex flex-col justify-between">
          <span className="pl-1 mb-1 font-semibold text-foreground">
            {currency(cartItem.quantity * cartItem.product.price)}
          </span>
          <div className="flex gap-4">
            <div className="border rounded w-fit ">
              <button
                onClick={() => decrementCartItem(cartItem.productId)}
                className="h-full px-1 text-xl sm:px-3"
              >
                -
              </button>
              <span className="inline-flex items-center justify-center w-10">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => incrementCartItem(cartItem.productId)}
                className="h-full px-1 text-xl sm:px-3"
              >
                +
              </button>
            </div>
            <Button
              size="icon"
              variant="destructive"
              onClick={() => deleteFromCart(cartItem.productId)}
            >
              <TrashIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItemCard;
