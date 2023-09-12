"use client";

import { CartItem } from "@/context/cart-context/cart-types";

const CART_KEY = "food-cart";

type StorageKey = typeof CART_KEY;

const getFromLocalStorage = (key: StorageKey) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const saveToLocalStorage = (key: StorageKey, data: any) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
};

export const getCartFromLocalStorage = () => {
  return getFromLocalStorage("food-cart") ?? [];
};

export const saveCartInLocalStorage = (cart: CartItem[]) => {
  saveToLocalStorage("food-cart", cart);
};
