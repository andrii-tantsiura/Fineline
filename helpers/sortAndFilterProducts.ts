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
    var regex = RegExp(searchNameProduct, "i");

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.search(regex) !== -1 ||
        product.ingredients.search(regex) !== -1
    );
  }

  return sortProductsByType(filteredProducts, sortType);
}
