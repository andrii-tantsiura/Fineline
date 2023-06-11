import { IProduct } from "../types";
import { SortType } from "../enums";

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
