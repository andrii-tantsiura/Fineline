import { createContext, useReducer } from "react";

import { StorageItem } from "../../enums";
import { useStateSyncWithStorage } from "../../hooks/useStateSyncWithStorage";
import { ICartItem } from "../../types";
import { cartReducer } from "./reducer";
import {
  ICartContextProps,
  ICartContextProviderProps,
  ICartState,
} from "./types";

export const CartContext = createContext<ICartContextProps>({
  products: [],
  subtotal: 0,
  addProduct: (cartItem: ICartItem) => {},
  removeProduct: (id: string) => {},
  setProductQuantity: (productId: string, quantity: number) => {},
  resetCart: () => {},
});

export const CartContextProvider: React.FC<ICartContextProviderProps> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    subtotal: 0,
  });

  const setState = (state: ICartState) => {
    dispatch({ type: "SET", payload: state });
  };

  useStateSyncWithStorage(cartState, setState, StorageItem.CART_STATE);

  function addProduct(cartItem: ICartItem): void {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: cartItem,
    });
  }

  function removeProduct(id: string): void {
    dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      payload: id,
    });
  }

  function setProductQuantity(productId: string, quantity: number) {
    dispatch({
      type: "SET_PRODUCT_QUANTITY",
      payload: {
        productId,
        quantity,
      },
    });
  }

  function resetCart() {
    dispatch({ type: "RESET_CART" });
  }

  const value: ICartContextProps = {
    products: cartState.products,
    subtotal: cartState.subtotal,
    addProduct: addProduct,
    removeProduct: removeProduct,
    setProductQuantity: setProductQuantity,
    resetCart: resetCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
