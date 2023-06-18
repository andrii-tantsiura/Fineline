import { createContext, useReducer } from "react";

import { IAdsContextProviderProps, IAdsContextProps } from "./types";
import { IAds } from "../../types";
import { adsReducer } from "./reducer";

export const AdsContext = createContext<IAdsContextProps>({
  ads: [],
  isAdsLoaded: false,
  errorMessage: "",
  setAds: (ads: IAds[]) => {},
  setErrorMessage: (errorMessage: string) => {},
});

export const AdsContextProvider: React.FC<IAdsContextProviderProps> = ({
  children,
}) => {
  const [adsState, dispatch] = useReducer(adsReducer, {
    ads: [],
    isAdsLoaded: false,
    errorMessage: "",
  });

  function setAds(ads: IAds[]): void {
    dispatch({ type: "SET_ADS", payload: ads });
  }

  function setErrorMessage(errorMessage: string): void {
    dispatch({ type: "SET_ERROR", payload: errorMessage });
  }

  const value: IAdsContextProps = {
    ads: adsState.ads,
    isAdsLoaded: adsState.isAdsLoaded,
    errorMessage: adsState.errorMessage,
    setAds: setAds,
    setErrorMessage: setErrorMessage,
  };

  return <AdsContext.Provider value={value}>{children}</AdsContext.Provider>;
};
