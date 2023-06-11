import { useContext, useState, useCallback } from "react";

import { ICategory } from "../types";
import CategoriesService from "../services/CategoriesService";
import { CategoriesContext } from "../store/CategoriesContextProvider";

export const useCategories = (): [
  ICategory[],
  boolean,
  string,
  () => Promise<void>
] => {
  const categoriesContext = useContext(CategoriesContext);

  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loadProductsCategories = useCallback(async (): Promise<void> => {
    const categories = await CategoriesService.getCategories();

    if (categories.isSuccess && categories.result) {
      categoriesContext.setCategories(categories.result);
      setErrorMessage("");
    } else {
      setErrorMessage(categories.getErrorDescription());
    }

    setIsCategoriesLoaded(categories.isSuccess);
  }, [categoriesContext, isCategoriesLoaded]);

  return [
    categoriesContext.categories,
    isCategoriesLoaded,
    errorMessage,
    loadProductsCategories,
  ];
};
