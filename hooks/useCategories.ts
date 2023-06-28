import { useContext } from "react";

import { ICategory } from "../types";
import CategoriesService from "../services/CategoriesService";
import { CategoriesContext } from "../store";

interface IUseCategoriesValues {
  categories: ICategory[];
  isCategoriesLoaded: boolean;
  errorMessage: string;
  loadProductsCategories: () => Promise<void>;
}

export const useCategories = (): IUseCategoriesValues => {
  const {
    categories,
    isCategoriesLoaded,
    errorMessage,
    setCategories,
    setErrorMessage,
  } = useContext(CategoriesContext);

  async function loadProductsCategories(): Promise<void> {
    const { isSuccess, result, getErrorDescription } =
      await CategoriesService.getCategories();

    if (isSuccess && result) {
      setCategories(result);
    } else {
      setErrorMessage(getErrorDescription());
    }
  }

  return {
    categories,
    isCategoriesLoaded,
    errorMessage,
    loadProductsCategories,
  };
};
