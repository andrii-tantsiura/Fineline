import { ICartState, Action } from "./types";

export function cartReducer(state: ICartState, action: Action): ICartState {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        products: [...state.products, action.payload],
        subtotal: state.subtotal + action.payload.product.price,
      };

    case "INCREASE_PRODUCT_QUANTITY":
      return {
        products: state.products.map((x) =>
          x.product.id === action.payload.productId
            ? { ...x, quantity: x.quantity + action.payload.quantity }
            : x
        ),
        subtotal: state.products.reduce(
          (sum, current) => sum + current.product.price * current.quantity,
          0
        ),
      };
    default:
      return state;
  }
}
