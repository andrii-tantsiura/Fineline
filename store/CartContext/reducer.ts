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

      const subtotal = products.reduce(
        (sum, { product, quantity }) => sum + product.price * quantity,
        0
      );

      return {
        products,
        subtotal,
      };
    }

    case "INCREASE_PRODUCT_QUANTITY": {
      const { quantity, productId } = action.payload;

      const products = state.products.map((x) =>
        x.product.id === productId
          ? { ...x, quantity: x.quantity + quantity }
          : x
      );

      const subtotal = products.reduce(
        (sum, { product, quantity }) => sum + product.price * quantity,
        0
      );

      return {
        products,
        subtotal,
      };
    }

    default:
      return state;
  }
}
