import { createContext, useReducer } from "react";

import {
  ICategoriesContextProviderProps,
  ICategoriesContextProps,
} from "./types";
import { ICategory } from "../../types";
import { categoriesReducer } from "./reducer";

export const CategoriesContext = createContext<ICategoriesContextProps>({
  categories: [],
  isCategoriesLoaded: false,
  errorMessage: "",
  setCategories: (categories: ICategory[]) => {},
  setErrorMessage: (errorMessage: string) => {},
});

export const CategoriesContextProvider: React.FC<
  ICategoriesContextProviderProps
> = ({ children }) => {
  const [categoriesState, dispatch] = useReducer(categoriesReducer, {
    categories: [],
    isCategoriesLoaded: false,
    errorMessage: "",
  });

  function setCategories(categories: ICategory[]): void {
    dispatch({ type: "SET_CATEGORIES", payload: categories });
  }

  function setErrorMessage(errorMessage: string): void {
    dispatch({ type: "SET_ERROR", payload: errorMessage });
  }

  const value: ICategoriesContextProps = {
    categories: categoriesState.categories,
    isCategoriesLoaded: categoriesState.isCategoriesLoaded,
    errorMessage: categoriesState.errorMessage,
    setCategories: setCategories,
    setErrorMessage: setErrorMessage,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
