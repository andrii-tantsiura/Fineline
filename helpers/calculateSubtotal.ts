import { ICartItem } from "../types";

export const calculateSubtotal = (products: ICartItem[]): number => {
  return products.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );
};
