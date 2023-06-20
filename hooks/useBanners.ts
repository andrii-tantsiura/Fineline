import { useContext } from "react";

import { IBanner } from "../types";
import { BannersContext } from "../store/BannersContext";
import BannersService from "../services/BannersService";

export const useBanners = (): [
  IBanner[],
  boolean,
  string,
  (bannerId: string) => Promise<void>,
  () => Promise<void>
] => {
  const {
    banners,
    isBannersLoaded,
    errorMessage,
    setBanners,
    setErrorMessage,
  } = useContext(BannersContext);

  async function loadBanners(): Promise<void> {
    const { isSuccess, result, getErrorDescription } =
      await BannersService.getBanners();

    if (isSuccess && result) {
      setBanners(result);
    } else {
      setErrorMessage(getErrorDescription());
    }
  }

  async function closeBanner(bannerId: string): Promise<void> {
    await BannersService.closeBanner(bannerId);

    setBanners(banners.filter((banner) => banner.id !== bannerId));
  }

  return [banners, isBannersLoaded, errorMessage, closeBanner, loadBanners];
};
