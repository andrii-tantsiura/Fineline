import { useContext } from "react";

import { CartContext } from "../store";
import { ICartItem } from "../types";

interface IUseCartValues {
  productsInCart: ICartItem[];
  cartSubtotal: number;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
  getProductQuantityById: (id: string) => number;
  resetCart: () => void;
}

export const useCart = (): IUseCartValues => {
  const {
    products,
    subtotal,
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
    addToCart,
    removeFromCart: removeProduct,
    getProductQuantityById,
    resetCart,
  };
};
