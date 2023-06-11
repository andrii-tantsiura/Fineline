import { useContext, useState, useCallback } from "react";

import { IProduct } from "../types";
import { SortType } from "../enums";
import { sortAndFilterProducts } from "../helpers";
import { useProducts } from "./index";

export const useFilterProducts = (): [
  IProduct[],
  (categoryId: string, searchNameProduct: string, sortType: SortType) => void
] => {
  const [products, isProductsLoaded, errorMessageForProducts, loadProducts] =
    useProducts();

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  function sortAndFilter(
    categoryId: string,
    searchNameProduct: string,
    sortType: SortType
  ): void {
    setFilteredProducts(
      sortAndFilterProducts(products, categoryId, searchNameProduct, sortType)
    );
  }

  return [filteredProducts, sortAndFilter];
};
