import { Product } from "@prisma/client";

export interface CartItem {
  product: Product;
  productId: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  deleteFromCart: (productId: string) => void;
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
  resetCart: () => void;
}
