import { useContext, useCallback } from "react";

import { IAds } from "../types";
import AdsService from "../services/AdsService";
import { AdsContext } from "../store/AdsContext";

export const useAds = (): [IAds[], boolean, string, () => Promise<void>] => {
  const { ads, isAdsLoaded, errorMessage, setAds, setErrorMessage } =
    useContext(AdsContext);

  const loadAds = useCallback(async (): Promise<void> => {
    const ads = await AdsService.getAds();

    if (ads.isSuccess && ads.result) {
      setAds(ads.result);
    } else {
      setErrorMessage(ads.getErrorDescription());
    }
  }, []);

  return [ads, isAdsLoaded, errorMessage, loadAds];
};
