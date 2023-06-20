import { IBanner } from "../../types";

export interface IBannersContextProps {
  banners: IBanner[];
  isBannersLoaded: boolean;
  errorMessage: string;
  setBanners: (banners: IBanner[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export interface IBannersContextProviderProps {
  children: React.ReactNode;
}

export interface IBannersState {
  banners: IBanner[];
  isBannersLoaded: boolean;
  errorMessage: string;
}

export type Action =
  | { type: "SET_BANNERS"; payload: IBanner[] }
  | { type: "SET_ERROR"; payload: string };
