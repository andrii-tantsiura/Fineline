import { IAdsState, Action } from "./types";

export function adsReducer(state: IAdsState, action: Action): IAdsState {
  switch (action.type) {
    case "SET_ADS":
      return {
        ads: action.payload,
        isAdsLoaded: true,
        errorMessage: "",
      };
    case "SET_ERROR":
      return {
        ads: state.ads,
        isAdsLoaded: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
