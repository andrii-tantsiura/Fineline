import { createContext, useReducer } from "react";

import { ICartContextProps, ICartContextProviderProps } from "./types";
import { cartReducer } from "./reducer";
import { IProduct } from "../../types";

export const CartContext = createContext<ICartContextProps>({
  products: [],
  subtotal: 0,
  addProduct: (product: IProduct, quantity: number) => {},
  increaseProductQuantity: (productId: string, quantity: number) => {},
});

export const CartContextProvider: React.FC<ICartContextProviderProps> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    subtotal: 0,
  });

  function addProduct(product: IProduct, quantity: number): void {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        product,
        quantity,
      },
    });
  }

  function increaseProductQuantity(productId: string, quantity: number) {
    dispatch({
      type: "INCREASE_PRODUCT_QUANTITY",
      payload: {
        productId,
        quantity,
      },
    });
  }

  const value: ICartContextProps = {
    products: cartState.products,
    subtotal: cartState.subtotal,
    addProduct: addProduct,
    increaseProductQuantity: increaseProductQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
