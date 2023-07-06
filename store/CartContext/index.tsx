import { createContext, useReducer } from "react";

import { StorageItem } from "../../enums";
import { useContextStateStorage } from "../../hooks/useContextStateStorage";
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
  increaseProductQuantity: (productId: string, quantity: number) => {},
  resetCart: () => {},
});

export const CartContextProvider: React.FC<ICartContextProviderProps> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    subtotal: 0,
  });

  const onStateLoaded = (state: ICartState) => {
    dispatch({ type: "SET", payload: state });
  };

  useContextStateStorage<ICartState>(
    cartState,
    onStateLoaded,
    StorageItem.CART_STATE
  );

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

  function increaseProductQuantity(productId: string, quantity: number) {
    dispatch({
      type: "INCREASE_PRODUCT_QUANTITY",
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
    increaseProductQuantity: increaseProductQuantity,
    resetCart: resetCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
