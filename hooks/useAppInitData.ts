import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import { useBanners } from "./useBanners";

export const useAppInitData = (): [boolean, string, () => Promise<void>] => {
  const [
    categories,
    isCategoriesLoaded,
    errorMessageForCategories,
    loadProductsCategories,
  ] = useCategories();

  const [products, isProductsLoaded, errorMessageForProducts, loadProducts] =
    useProducts();

  const [
    banners,
    isBannersLoaded,
    errorMessageForBanners,
    closeBanner,
    loadBanners,
  ] = useBanners();

  async function loadData(): Promise<void> {
    await loadProductsCategories();
    await loadProducts();
    await loadBanners();
  }

  const isDataLoaded =
    isCategoriesLoaded && isProductsLoaded && isBannersLoaded;
  const errorMessage =
    errorMessageForCategories ??
    errorMessageForProducts ??
    errorMessageForBanners;

  return [isDataLoaded, errorMessage, loadData];
};
