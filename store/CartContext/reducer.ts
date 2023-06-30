import { calculateSubtotal } from "../../helpers/calculateSubtotal";
import { ICartState, Action } from "./types";

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

    case "INCREASE_PRODUCT_QUANTITY": {
      const { quantity, productId } = action.payload;

      const products = state.products.map((x) =>
        x.product.id === productId
          ? { ...x, quantity: x.quantity + quantity }
          : x
      );

      return {
        products,
        subtotal: calculateSubtotal(products),
      };
    }

    default:
      return state;
  }
}
