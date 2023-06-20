import { useContext, useCallback } from "react";

import { ICategory } from "../types";
import CategoriesService from "../services/CategoriesService";
import { CategoriesContext } from "../store/CategoriesContext";

export const useCategories = (): [
  ICategory[],
  boolean,
  string,
  () => Promise<void>
] => {
  const {
    categories,
    isCategoriesLoaded,
    errorMessage,
    setCategories,
    setErrorMessage,
  } = useContext(CategoriesContext);

  const loadProductsCategories = useCallback(async (): Promise<void> => {
    const { isSuccess, result, getErrorDescription } =
      await CategoriesService.getCategories();

    if (isSuccess && result) {
      setCategories(result);
    } else {
      setErrorMessage(getErrorDescription());
    }
  }, []);

  return [categories, isCategoriesLoaded, errorMessage, loadProductsCategories];
};
