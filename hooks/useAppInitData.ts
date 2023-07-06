import { useBanners } from "./useBanners";
import { useCategories } from "./useCategories";
import { useProducts } from "./useProducts";

interface IUseAppInitDataValues {
  isDataLoaded: boolean;
  errorMessage: string;
  loadData: () => Promise<void>;
}

export const useAppInitData = (): IUseAppInitDataValues => {
  const {
    isCategoriesLoaded,
    errorMessage: errorMessageForCategories,
    loadProductsCategories,
  } = useCategories();

  const {
    isProductsLoaded,
    errorMessage: errorMessageForProducts,
    loadProducts,
  } = useProducts();

  const {
    isBannersLoaded,
    errorMessage: errorMessageForBanners,
    loadBanners,
  } = useBanners();

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

  return { isDataLoaded, errorMessage, loadData };
};
