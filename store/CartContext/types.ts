import { ICartItem } from "../../types";

export interface ICartState {
  products: Array<ICartItem>;
  subtotal: number;
}

export interface ICartContextProps extends Required<ICartState> {
  addProduct: (cartItem: ICartItem) => void;
  removeProduct: (id: string) => void;
  increaseProductQuantity: (productId: string, quantity: number) => void;
  resetCart: () => void;
}

export interface ICartContextProviderProps {
  children: React.ReactNode;
}

export type Action =
  | {
      type: "SET";
      payload: ICartState;
    }
  | {
      type: "ADD_PRODUCT_TO_CART";
      payload: ICartItem;
    }
  | {
      type: "REMOVE_PRODUCT_FROM_CART";
      payload: string;
    }
  | {
      type: "INCREASE_PRODUCT_QUANTITY";
      payload: {
        productId: string;
        quantity: number;
      };
    }
  | {
      type: "RESET_CART";
    };
