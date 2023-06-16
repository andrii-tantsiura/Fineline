import { ICategoriesState, Action } from "./types";

export function categoriesReducer(
  state: ICategoriesState,
  action: Action
): ICategoriesState {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        categories: action.payload,
        isCategoriesLoaded: true,
        errorMessage: "",
      };
    case "SET_ERROR":
      return {
        categories: state.categories,
        isCategoriesLoaded: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
