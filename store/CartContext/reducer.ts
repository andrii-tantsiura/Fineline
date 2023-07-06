import { calculateSubtotal } from "../../helpers";
import { Action, ICartState } from "./types";

export function cartReducer(state: ICartState, action: Action): ICartState {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product, quantity } = action.payload;

      return {
        products: [...state.products, action.payload],
        subtotal: state.subtotal + product.price * quantity,
      };
    }

    case "REMOVE_PRODUCT_FROM_CART": {
      const id = action.payload;

      const products = state.products.filter(
        (cartItem) => cartItem.product.id !== id
      );

      return {
        products,
        subtotal: calculateSubtotal(products),
      };
    }

    case "SET_PRODUCT_QUANTITY": {
      const { quantity, productId } = action.payload;

      const products = state.products.map((x) =>
        x.product.id === productId ? { ...x, quantity } : x
      );

      return {
        products,
        subtotal: calculateSubtotal(products),
      };
    }

    case "RESET_CART": {
      return {
        products: [],
        subtotal: 0,
      };
    }

    default:
      return state;
  }
}
