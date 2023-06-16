import { useContext, useCallback } from "react";

import { ICategory } from "../types";
import CategoriesService from "../services/CategoriesService";
import { CategoriesContext } from "../store/CategoriesContext/CategoriesContextProvider";

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
    const categories = await CategoriesService.getCategories();

    if (categories.isSuccess && categories.result) {
      setCategories(categories.result);
    } else {
      setErrorMessage(categories.getErrorDescription());
    }
  }, []);

  return [categories, isCategoriesLoaded, errorMessage, loadProductsCategories];
};
