import { ICategory } from "../../types";

export interface ICategoriesContextProps {
  categories: ICategory[];
  isCategoriesLoaded: boolean;
  errorMessage: string;
  setCategories: (categories: ICategory[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export interface ICategoriesContextProviderProps {
  children: React.ReactNode;
}

export interface ICategoriesState {
  categories: ICategory[];
  isCategoriesLoaded: boolean;
  errorMessage: string;
}

export type Action =
  | { type: "SET_CATEGORIES"; payload: ICategory[] }
  | { type: "SET_ERROR"; payload: string };
