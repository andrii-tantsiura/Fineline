import { useState, useEffect, useCallback } from "react";

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
  const [searchNameProduct, setSearchNameProduct] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>(SortType.RATING);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const sortAndFilter = useCallback(
    (categoryId: string, searchNameProduct: string, sortType: SortType) => {
      setSelectedCategoryId(categoryId);
      setSearchNameProduct(searchNameProduct);
      setSortType(sortType);

      setFilteredProducts(
        sortAndFilterProducts(products, categoryId, searchNameProduct, sortType)
      );
    },
    [products, selectedCategoryId, searchNameProduct, sortType]
  );

  useEffect(() => {
    setFilteredProducts(
      sortAndFilterProducts(
        products,
        selectedCategoryId,
        searchNameProduct,
        sortType
      )
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
