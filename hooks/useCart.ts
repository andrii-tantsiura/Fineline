import { useContext } from "react";

import { CartContext } from "../store";
import { ICartItem } from "../types";

interface IUseCartValues {
  productsInCart: ICartItem[];
  cartSubtotal: number;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
}

export const useCart = (): IUseCartValues => {
  const {
    products,
    subtotal,
    addProduct,
    removeProduct: removeFromCart,
    increaseProductQuantity,
  } = useContext(CartContext);

  const addToCart = ({ product, quantity }: ICartItem) => {
    if (products.some((x) => x.product.id === product.id)) {
      increaseProductQuantity(product.id, quantity);
    } else {
      addProduct({ product, quantity });
    }
  };

  return {
    productsInCart: products,
    cartSubtotal: subtotal,
    addToCart,
    removeFromCart,
  };
};
