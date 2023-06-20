import { createContext, useReducer } from "react";

import { IBannersContextProviderProps, IBannersContextProps } from "./types";
import { IBanner } from "../../types";
import { bannersReducer } from "./reducer";

export const BannersContext = createContext<IBannersContextProps>({
  banners: [],
  isBannersLoaded: false,
  errorMessage: "",
  setBanners: (banners: IBanner[]) => {},
  setErrorMessage: (errorMessage: string) => {},
});

export const BannersContextProvider: React.FC<IBannersContextProviderProps> = ({
  children,
}) => {
  const [bannersState, dispatch] = useReducer(bannersReducer, {
    banners: [],
    isBannersLoaded: false,
    errorMessage: "",
  });

  function setBanners(banners: IBanner[]): void {
    dispatch({ type: "SET_BANNERS", payload: banners });
  }

  function setErrorMessage(errorMessage: string): void {
    dispatch({ type: "SET_ERROR", payload: errorMessage });
  }

  const value: IBannersContextProps = {
    banners: bannersState.banners,
    isBannersLoaded: bannersState.isBannersLoaded,
    errorMessage: bannersState.errorMessage,
    setBanners: setBanners,
    setErrorMessage: setErrorMessage,
  };

  return (
    <BannersContext.Provider value={value}>{children}</BannersContext.Provider>
  );
};
