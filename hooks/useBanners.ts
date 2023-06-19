import { useContext, useCallback } from "react";

import { IBanner } from "../types";
import { BannersContext } from "../store/BannersContext";
import BannersService from "../services/BannersService";

export const useBanners = (): [
  IBanner[],
  boolean,
  string,
  () => Promise<void>
] => {
  const {
    banners,
    isBannersLoaded,
    errorMessage,
    setBanners,
    setErrorMessage,
  } = useContext(BannersContext);

  const loadBanners = useCallback(async (): Promise<void> => {
    const banners = await BannersService.getBanners();

    if (banners.isSuccess && banners.result) {
      setBanners(banners.result);
    } else {
      setErrorMessage(banners.getErrorDescription());
    }
  }, []);

  return [banners, isBannersLoaded, errorMessage, loadBanners];
};
