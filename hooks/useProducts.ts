import { useContext, useCallback } from "react";

import { IProduct } from "../types";
import ProductsService from "../services/ProductsService";
import { ProductsContext } from "../store/ProductsContext";

export const useProducts = (): [
  IProduct[],
  boolean,
  string,
  () => Promise<void>
] => {
  const {
    products,
    isProductsLoaded,
    errorMessage,
    setProducts,
    setErrorMessage,
  } = useContext(ProductsContext);

  const loadProducts = useCallback(async (): Promise<void> => {
    const { isSuccess, result, getErrorDescription } =
      await ProductsService.getProducts();

    if (isSuccess && result) {
      setProducts(result);
    } else {
      setErrorMessage(getErrorDescription());
    }
  }, []);

  return [products, isProductsLoaded, errorMessage, loadProducts];
};
