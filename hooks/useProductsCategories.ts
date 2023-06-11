import { useContext, useState, useCallback } from "react";

import ICategory from "../types/category";
import CategoriesService from "../services/CategoriesService";
import { CategoriesContext } from "../store/CategoriesContextProvider";

export const useProductsCategories = (): [
  ICategory[],
  boolean,
  () => Promise<void>
] => {
  const categoriesContext = useContext(CategoriesContext);
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState<boolean>(false);

  const loadProductsCategories = useCallback(async (): Promise<void> => {
    const categories = await CategoriesService.getCategories();

    if (categories.isSuccess && categories.result) {
      categoriesContext.setCategories(categories.result);
    } else {
      //AlertService.warning(categories.getErrorDescription());
    }

    setIsCategoriesLoaded(categories.isSuccess);
  }, [categoriesContext, isCategoriesLoaded]);

  return [
    categoriesContext.categories,
    isCategoriesLoaded,
    loadProductsCategories,
  ];
};
