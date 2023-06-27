import { IProduct } from "../../types";

export interface SelectedProduct {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  products: Array<SelectedProduct>;
  subtotal: number;
}

export interface ICartContextProps extends Required<ICartState> {
  addProduct: (product: IProduct, quantity: number) => void;
  increaseProductQuantity: (productId: string, quantity: number) => void;
}

export interface ICartContextProviderProps {
  children: React.ReactNode;
}

export type Action =
  | {
      type: "ADD_PRODUCT_TO_CART";
      payload: {
        product: IProduct;
        quantity: number;
      };
    }
  | {
      type: "INCREASE_PRODUCT_QUANTITY";
      payload: {
        productId: string;
        quantity: number;
      };
    };
