import { useEffect } from "react";

import { useCategories } from "../../../hooks/useCategories";
import { useProducts } from "../../../hooks/useProducts";

interface IAppInitDataComponent {
  onInitData(isDataLoaded: boolean, errorMessage: string): void;
}

export const AppInitDataComponent: React.FC<IAppInitDataComponent> = ({
  onInitData = (isDataLoaded, errorMessage) => {},
}) => {
  const [
    categories,
    isCategoriesLoaded,
    errorMessageForCategories,
    loadProductsCategories,
  ] = useCategories();

  const [products, isProductsLoaded, errorMessageForProducts, loadProducts] =
    useProducts();

  useEffect(() => {
    loadProductsCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    const isDataLoaded = isCategoriesLoaded && isProductsLoaded;
    const errorMessage = isProductsLoaded
      ? errorMessageForCategories
      : errorMessageForProducts;

    onInitData(isDataLoaded, errorMessage);
  }, [
    isCategoriesLoaded,
    isProductsLoaded,
    errorMessageForCategories,
    errorMessageForProducts,
  ]);

  return <></>;
};
