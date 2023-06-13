import { useContext, useState, useCallback } from "react";

import { IProduct } from "../types";
import ProductsService from "../services/ProductsService";
import { ProductsContext } from "../store/ProductsContextProvider";

export const useProducts = (): [
  IProduct[],
  boolean,
  string,
  () => Promise<void>
] => {
  const productsContext = useContext(ProductsContext);

  const loadProducts = useCallback(async (): Promise<void> => {
    const products = await ProductsService.getProducts();

    if (products.isSuccess && products.result) {
      productsContext.setProducts(products.result);
    } else {
      productsContext.setErrorMessage(products.getErrorDescription());
    }
  }, [productsContext]);

  return [
    productsContext.products,
    productsContext.isProductsLoaded,
    productsContext.errorMessage,
    loadProducts,
  ];
};
