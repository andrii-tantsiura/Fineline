import { useContext, useState, useCallback } from "react";

import { ICategory } from "../types";
import CategoriesService from "../services/CategoriesService";
import { CategoriesContext } from "../store/CategoriesContext/CategoriesContextProvider";

export const useCategories = (): [
  ICategory[],
  boolean,
  string,
  () => Promise<void>
] => {
  const categoriesContext = useContext(CategoriesContext);

  const loadProductsCategories = useCallback(async (): Promise<void> => {
    const categories = await CategoriesService.getCategories();

    if (categories.isSuccess && categories.result) {
      categoriesContext.setCategories(categories.result);
    } else {
      categoriesContext.setErrorMessage(categories.getErrorDescription());
    }
  }, [categoriesContext]);

  return [
    categoriesContext.categories,
    categoriesContext.isCategoriesLoaded,
    categoriesContext.errorMessage,
    loadProductsCategories,
  ];
};
