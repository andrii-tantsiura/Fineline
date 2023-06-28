import { ICartItem } from "../../types";

export interface ICartState {
  products: Array<ICartItem>;
  subtotal: number;
}

export interface ICartContextProps extends Required<ICartState> {
  addProduct: (cartItem: ICartItem) => void;
  increaseProductQuantity: (productId: string, quantity: number) => void;
}

export interface ICartContextProviderProps {
  children: React.ReactNode;
}

export type Action =
  | {
      type: "ADD_PRODUCT_TO_CART";
      payload: ICartItem;
    }
  | {
      type: "INCREASE_PRODUCT_QUANTITY";
      payload: {
        productId: string;
        quantity: number;
      };
    };
