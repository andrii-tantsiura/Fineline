import { IBannersState, Action } from "./types";

export function bannersReducer(
  state: IBannersState,
  action: Action
): IBannersState {
  switch (action.type) {
    case "SET_BANNERS":
      return {
        banners: action.payload,
        isBannersLoaded: true,
        errorMessage: "",
      };
    case "SET_ERROR":
      return {
        banners: state.banners,
        isBannersLoaded: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
