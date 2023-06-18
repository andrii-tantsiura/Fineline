import { useCallback } from "react";

import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import { useAds } from "../hooks/useAds";

export const useAppInitData = (): [boolean, string, () => Promise<void>] => {
  const [
    categories,
    isCategoriesLoaded,
    errorMessageForCategories,
    loadProductsCategories,
  ] = useCategories();

  const [products, isProductsLoaded, errorMessageForProducts, loadProducts] =
    useProducts();

  const [ads, isAdsLoaded, errorMessageForAds, loadAds] = useAds();

  const loadData = useCallback(async (): Promise<void> => {
    await loadProductsCategories();
    await loadProducts();
    await loadAds();
  }, []);

  const isDataLoaded = isCategoriesLoaded && isProductsLoaded && isAdsLoaded;
  const errorMessage =
    errorMessageForCategories ?? errorMessageForProducts ?? errorMessageForAds;

  return [isDataLoaded, errorMessage, loadData];
};
