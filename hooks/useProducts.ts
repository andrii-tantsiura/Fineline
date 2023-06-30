import { useContext } from "react";

import { IProduct } from "../types";
import ProductsService from "../services/ProductsService";
import { ProductsContext } from "../store";

interface IUseProductsValues {
  products: IProduct[];
  isProductsLoaded: boolean;
  errorMessage: string;
  loadProducts: () => Promise<void>;
}

export const useProducts = (): IUseProductsValues => {
  const {
    products,
    isProductsLoaded,
    errorMessage,
    setProducts,
    setErrorMessage,
  } = useContext(ProductsContext);

  async function loadProducts(): Promise<void> {
    const { isSuccess, result, getErrorDescription } =
      await ProductsService.getProducts();

    if (isSuccess && result) {
      setProducts(result);
    } else {
      setErrorMessage(getErrorDescription());
    }
  }

  return { products, isProductsLoaded, errorMessage, loadProducts };
};
