import { createContext, useReducer } from "react";

import { ICartItem } from "../../types";
import { cartReducer } from "./reducer";
import { ICartContextProps, ICartContextProviderProps } from "./types";

export const CartContext = createContext<ICartContextProps>({
  products: [],
  subtotal: 0,
  addProduct: (cartItem: ICartItem) => {},
  increaseProductQuantity: (productId: string, quantity: number) => {},
});

export const CartContextProvider: React.FC<ICartContextProviderProps> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    subtotal: 0,
  });

  function addProduct(cartItem: ICartItem): void {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: cartItem,
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
