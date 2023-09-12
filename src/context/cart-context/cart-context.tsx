"use client";

import { createContext, useCallback, useEffect, useReducer } from "react";
import { CartContextType, CartItem } from "./cart-types";
import { cartReducer } from "./cart-reducer";
import {
  getCartFromLocalStorage,
  saveCartInLocalStorage,
} from "@/lib/localStorage";

export const CartContext = createContext<CartContextType | null>(null);

const initialCart: CartItem[] =
  typeof window !== "undefined" ? getCartFromLocalStorage() ?? [] : [];

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    saveCartInLocalStorage(cartItems);
  }, [cartItems]);

  const addToCart = useCallback((item: CartItem) => {
    dispatch({ type: "ADD", item });
  }, []);

  const deleteFromCart = useCallback((productId: string) => {
    dispatch({ type: "DELETE", productId });
  }, []);

  const incrementCartItem = useCallback((productId: string) => {
    dispatch({ type: "INCREMENT", productId });
  }, []);

  const decrementCartItem = useCallback((productId: string) => {
    dispatch({ type: "DECREMENT", productId });
  }, []);

  const resetCart = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decrementCartItem,
        deleteFromCart,
        incrementCartItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
