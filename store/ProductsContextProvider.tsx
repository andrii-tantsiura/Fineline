import { ReactNode, createContext, useReducer } from "react";

import { IProduct } from "../types";

interface IProductsContextProps {
  products: IProduct[];
  isProductsLoaded: boolean;
  errorMessage: string;
  setProducts: (products: IProduct[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

interface IProductsContextProviderProps {
  children: ReactNode;
}

interface IProductsState {
  products: IProduct[];
  isProductsLoaded: boolean;
  errorMessage: string;
}

type Action =
  | { type: "SET_PRODUCTS"; payload: IProduct[] }
  | { type: "SET_ERROR"; payload: string };

export const ProductsContext = createContext<IProductsContextProps>({
  products: [],
  isProductsLoaded: false,
  errorMessage: "",
  setProducts: (products: IProduct[]) => {},
  setErrorMessage: (errorMessage: string) => {},
});

function productsReducer(
  state: IProductsState,
  action: Action
): IProductsState {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
        isProductsLoaded: true,
        errorMessage: "",
      };
    case "SET_ERROR":
      return {
        products: state.products,
        isProductsLoaded: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

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
