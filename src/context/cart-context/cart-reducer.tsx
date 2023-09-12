import { CartItem } from "./cart-types";

export type CartActionType =
  | { type: "INITIAL"; cart: CartItem[] }
  | { type: "ADD"; item: CartItem }
  | { type: "DELETE"; productId: string }
  | { type: "INCREMENT"; productId: string }
  | { type: "DECREMENT"; productId: string }
  | { type: "RESET" };

export const cartReducer = (
  state: CartItem[],
  action: CartActionType
): CartItem[] => {
  switch (action.type) {
    case "ADD": {
      const index = state.findIndex(
        (product) => product.productId === action.item.productId
      );

      if (index === -1) {
        return [...state, action.item];
      }

      return state.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            quantity: product.quantity + action.item.quantity,
          };
        } else {
          return product;
        }
      });
    }

    case "DELETE": {
      return [
        ...state.filter((product) => product.productId !== action.productId),
      ];
    }

    case "INCREMENT": {
      return state.map((product) => {
        if (product.productId === action.productId && product.quantity < 99) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    }

    case "DECREMENT": {
      return state.map((product) => {
        if (product.productId === action.productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    }

    case "RESET": {
      return [];
    }

    default: {
      return state;
    }
  }
};
