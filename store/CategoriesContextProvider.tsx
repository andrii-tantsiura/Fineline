import { ReactNode, createContext, useState } from "react";

import ICategory from "../types/category";

interface ICategoriesContextProps {
  categories: ICategory[];
  setCategories: (categories: ICategory[]) => void;
}

interface ICategoriesContextProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext<ICategoriesContextProps>({
  categories: [],
  setCategories: (categories: ICategory[]) => {},
});

export const CategoriesContextProvider: React.FC<
  ICategoriesContextProviderProps
> = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const value: ICategoriesContextProps = {
    categories: categories,
    setCategories: (categories: ICategory[]): void => setCategories(categories),
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
