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

  const [isProductsLoaded, setIsProductsLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loadProducts = useCallback(async (): Promise<void> => {
    const products = await ProductsService.getProducts();

    if (products.isSuccess && products.result) {
      productsContext.setProducts(products.result);
      setErrorMessage("");
    } else {
      setErrorMessage(products.getErrorDescription());
    }

    setIsProductsLoaded(products.isSuccess);
  }, [productsContext, isProductsLoaded]);

  return [
    productsContext.products,
    isProductsLoaded,
    errorMessage,
    loadProducts,
  ];
};
