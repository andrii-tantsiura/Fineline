import { ReactNode, createContext, useState } from "react";

import { IProduct } from "../types";

interface IProductsContextProps {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

interface IProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<IProductsContextProps>({
  products: [],
  setProducts: (products: IProduct[]) => {},
});

export const ProductsContextProvider: React.FC<
  IProductsContextProviderProps
> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const value: IProductsContextProps = {
    products: products,
    setProducts: (products: IProduct[]): void => setProducts(products),
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
