import { CartItem } from "@/context/cart-context/cart-types";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/**
 * @param price takes price as number
 * @returns formated price as string
 */
export const currency = (price: number) => {
  return USDollar.format(price);
};

/**
 * @param cart cartItems from cartContext
 * @returns total price for every product and quantity taken into account
 */
export const getTotalPrice = (cart: CartItem[]) => {
  return currency(
    cart.reduce((acc, curr) => acc + curr.quantity * curr.product.price, 0)
  );
};
