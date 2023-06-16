import { IProduct } from "../../types";

export interface IProductsContextProps {
  products: IProduct[];
  isProductsLoaded: boolean;
  errorMessage: string;
  setProducts: (products: IProduct[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export interface IProductsContextProviderProps {
  children: React.ReactNode;
}

export interface IProductsState {
  products: IProduct[];
  isProductsLoaded: boolean;
  errorMessage: string;
}

export type Action =
  | { type: "SET_PRODUCTS"; payload: IProduct[] }
  | { type: "SET_ERROR"; payload: string };
