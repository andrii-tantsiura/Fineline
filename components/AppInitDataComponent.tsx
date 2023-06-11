import { useEffect } from "react";

import { useProductsCategories } from "../hooks/useProductsCategories";

interface IAppInitDataComponent {
  onDataLoaded(isDataLoaded: boolean): void;
}

export const AppInitDataComponent: React.FC<IAppInitDataComponent> = ({
  onDataLoaded = (isDataLoaded) => {},
}) => {
  const [categories, isCategoriesLoaded, loadProductsCategories] =
    useProductsCategories();

  useEffect(() => {
    loadProductsCategories();
  }, []);

  useEffect(() => {
    onDataLoaded(isCategoriesLoaded);
  }, [isCategoriesLoaded]);

  return <></>;
};
