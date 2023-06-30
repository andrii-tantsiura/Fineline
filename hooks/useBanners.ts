import { useContext } from "react";

import { IBanner } from "../types";
import { BannersContext } from "../store";
import BannersService from "../services/BannersService";

interface IUseBannersValues {
  banners: IBanner[];
  isBannersLoaded: boolean;
  errorMessage: string;
  closeBanner: (bannerId: string) => Promise<void>;
  loadBanners: () => Promise<void>;
}

export const useBanners = (): IUseBannersValues => {
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

  return { banners, isBannersLoaded, errorMessage, closeBanner, loadBanners };
};
