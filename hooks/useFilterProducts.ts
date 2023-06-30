import { useState, useEffect } from "react";

import { IProduct } from "../types";
import { SortType } from "../enums";
import { sortAndFilterProducts } from "../helpers";
import { useProducts } from "./useProducts";

interface IUseFilterProductsValues {
  filteredProducts: IProduct[];
  isProductsLoaded: boolean;
  errorMessageForProducts: string;
  sortAndFilter: (
    categoryId: string,
    searchNameProduct: string,
    sortType: SortType
  ) => void;
  loadProducts: () => Promise<void>;
}

export const useFilterProducts = (): IUseFilterProductsValues => {
  const {
    products,
    isProductsLoaded,
    errorMessage: errorMessageForProducts,
    loadProducts,
  } = useProducts();

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

  return {
    filteredProducts,
    isProductsLoaded,
    errorMessageForProducts,
    sortAndFilter,
    loadProducts,
  };
};
