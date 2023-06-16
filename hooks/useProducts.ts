import { useContext, useCallback } from "react";

import { IProduct } from "../types";
import ProductsService from "../services/ProductsService";
import { ProductsContext } from "../store/ProductsContextProvider";

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
    const products = await ProductsService.getProducts();

    if (products.isSuccess && products.result) {
      setProducts(products.result);
    } else {
      setErrorMessage(products.getErrorDescription());
    }
  }, []);

  return [products, isProductsLoaded, errorMessage, loadProducts];
};
