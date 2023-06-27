import { useState, useEffect } from "react";

import { IProduct } from "../types";
import { SortType } from "../enums";
import { sortAndFilterProducts } from "../helpers";
import { useProducts } from "./useProducts";

export const useFilterProducts = (): [
  IProduct[],
  boolean,
  string,
  (categoryId: string, searchNameProduct: string, sortType: SortType) => void,
  () => Promise<void>
] => {
  const [products, isProductsLoaded, errorMessageForProducts, loadProducts] =
    useProducts();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>(SortType.RATING);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  function sortAndFilter(
    categoryId: string,
    searchQuery: string,
    sortType: SortType
  ) {
    setSelectedCategoryId(categoryId);
    setSearchQuery(searchQuery);
    setSortType(sortType);

    setFilteredProducts(
      sortAndFilterProducts(products, categoryId, searchQuery, sortType)
    );
  }

  useEffect(() => {
    setFilteredProducts(
      sortAndFilterProducts(products, selectedCategoryId, searchQuery, sortType)
    );
  }, [products]);

  return [
    filteredProducts,
    isProductsLoaded,
    errorMessageForProducts,
    sortAndFilter,
    loadProducts,
  ];
};
