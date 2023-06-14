import { ReactNode, createContext, useReducer } from "react";

import { ICategory } from "../../types";

interface ICategoriesContextProps {
  categories: ICategory[];
  isCategoriesLoaded: boolean;
  errorMessage: string;
  setCategories: (categories: ICategory[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

interface ICategoriesContextProviderProps {
  children: ReactNode;
}

interface ICategoriesState {
  categories: ICategory[];
  isCategoriesLoaded: boolean;
  errorMessage: string;
}

type Action =
  | { type: "SET_CATEGORIES"; payload: ICategory[] }
  | { type: "SET_ERROR"; payload: string };

export const CategoriesContext = createContext<ICategoriesContextProps>({
  categories: [],
  isCategoriesLoaded: false,
  errorMessage: "",
  setCategories: (categories: ICategory[]) => {},
  setErrorMessage: (errorMessage: string) => {},
});

function categoriesReducer(
  state: ICategoriesState,
  action: Action
): ICategoriesState {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        categories: action.payload,
        isCategoriesLoaded: true,
        errorMessage: "",
      };
    case "SET_ERROR":
      return {
        categories: state.categories,
        isCategoriesLoaded: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

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
