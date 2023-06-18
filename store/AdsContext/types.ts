import { IAds } from "../../types";

export interface IAdsContextProps {
  ads: IAds[];
  isAdsLoaded: boolean;
  errorMessage: string;
  setAds: (ads: IAds[]) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export interface IAdsContextProviderProps {
  children: React.ReactNode;
}

export interface IAdsState {
  ads: IAds[];
  isAdsLoaded: boolean;
  errorMessage: string;
}

export type Action =
  | { type: "SET_ADS"; payload: IAds[] }
  | { type: "SET_ERROR"; payload: string };
