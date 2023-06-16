import { IProductsState, Action } from "./types";

export function productsReducer(
  state: IProductsState,
  action: Action
): IProductsState {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
        isProductsLoaded: true,
        errorMessage: "",
      };
    case "SET_ERROR":
      return {
        products: state.products,
        isProductsLoaded: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
