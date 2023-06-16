import { useCallback } from "react";

import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";

export const useAppInitData = (): [boolean, string, () => Promise<void>] => {
  const [
    categories,
    isCategoriesLoaded,
    errorMessageForCategories,
    loadProductsCategories,
  ] = useCategories();

  const [products, isProductsLoaded, errorMessageForProducts, loadProducts] =
    useProducts();

  const loadData = useCallback(async (): Promise<void> => {
    await loadProductsCategories();
    await loadProducts();
  }, []);

  const isDataLoaded = isCategoriesLoaded && isProductsLoaded;
  const errorMessage = isProductsLoaded
    ? errorMessageForCategories
    : errorMessageForProducts;

  return [isDataLoaded, errorMessage, loadData];
};
