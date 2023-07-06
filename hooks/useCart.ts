import { useContext } from "react";

import { CartContext } from "../store";
import { ICartItem } from "../types";

interface IUseCartValues {
  productsInCart: ICartItem[];
  cartSubtotal: number;
  loadCartFromStorage: () => Promise<void>;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
  getProductQuantityById: (id: string) => number;
  resetCart: () => void;
}

export const useCart = (): IUseCartValues => {
  const {
    products,
    subtotal,
    loadCartFromStorage,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    resetCart,
  } = useContext(CartContext);

  const addToCart = ({ product, quantity }: ICartItem) => {
    if (products.some((x) => x.product.id === product.id)) {
      increaseProductQuantity(product.id, quantity);
    } else {
      addProduct({ product, quantity });
    }
  };

  const getProductQuantityById = (id: string): number => {
    return products.find((item) => item.product.id === id)?.quantity ?? 0;
  };

  return {
    productsInCart: products,
    cartSubtotal: subtotal,
    loadCartFromStorage,
    addToCart,
    removeFromCart: removeProduct,
    getProductQuantityById,
    resetCart,
  };
};
