import { SortType } from "../enums";
import { ICartItem, IProduct } from "../types";

export function sortProductsByType(
  products: IProduct[],
  sortType: SortType
): IProduct[] {
  switch (sortType) {
    case SortType.RATING:
      return products.sort(
        (productA: IProduct, productB: IProduct) =>
          productB.rating - productA.rating
      );
    case SortType.CHEAPER:
      return products.sort(
        (productA: IProduct, productB: IProduct) =>
          productA.price - productB.price
      );
    case SortType.EXPENSIVE:
      return products.sort(
        (productA: IProduct, productB: IProduct) =>
          productB.price - productA.price
      );
  }
}

export function sortAndFilterProducts(
  products: IProduct[],
  categoryId: string,
  searchQuery: string,
  sortType: SortType
): IProduct[] {
  let filteredProducts: IProduct[] = products.filter(
    (product) => product.categoryId === categoryId
  );

  if (searchQuery !== "") {
    var regex = RegExp(searchQuery, "i");

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.search(regex) !== -1 ||
        product.ingredients.search(regex) !== -1
    );
  }

  return sortProductsByType(filteredProducts, sortType);
}

export const calculateSubtotal = (products: ICartItem[]): number => {
  return products.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );
};
