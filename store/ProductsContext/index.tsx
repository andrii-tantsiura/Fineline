import { createContext, useReducer } from "react";

import { IProduct } from "../../types";
import { IProductsContextProviderProps, IProductsContextProps } from "./types";
import { productsReducer } from "./reducer";

export const ProductsContext = createContext<IProductsContextProps>({
  products: [],
  isProductsLoaded: false,
  errorMessage: "",
  setProducts: (products: IProduct[]) => {},
  setErrorMessage: (errorMessage: string) => {},
});

export const ProductsContextProvider: React.FC<
  IProductsContextProviderProps
> = ({ children }) => {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: [],
    isProductsLoaded: false,
    errorMessage: "",
  });

  function setProducts(products: IProduct[]): void {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }

  function setErrorMessage(errorMessage: string): void {
    dispatch({ type: "SET_ERROR", payload: errorMessage });
  }

  const value: IProductsContextProps = {
    products: productsState.products,
    isProductsLoaded: productsState.isProductsLoaded,
    errorMessage: productsState.errorMessage,
    setProducts: setProducts,
    setErrorMessage: setErrorMessage,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
