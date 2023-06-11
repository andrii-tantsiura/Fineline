import { IProduct } from "../types";
import { SortType } from "../enums";
import { sortProductsByType } from "./sortProductsByType";

export function sortAndFilterProducts(
  products: IProduct[],
  categoryId: string,
  searchNameProduct: string,
  sortType: SortType
): IProduct[] {
  let filteredProducts: IProduct[] = products.filter(
    (product) => product.categoryId === categoryId
  );

  if (searchNameProduct !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.name === searchNameProduct
    );
  }

  return sortProductsByType(filteredProducts, sortType);
}
