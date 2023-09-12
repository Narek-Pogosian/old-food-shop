import { CartContext } from "@/context/cart-context/cart-context";
import { useContext } from "react";

const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext)
    throw new Error("useCartContext must be inside a CartContextProvider");

  return cartContext;
};

export default useCartContext;
