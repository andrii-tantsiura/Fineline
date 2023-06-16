import { ICategory } from "../types";
import { AOResult, getModelsFromFirebase } from "../helpers";

class CategoriesService {
  getCategories = (): Promise<AOResult<ICategory[]>> => {
    return getModelsFromFirebase("/categories.json");
  };
}

export default new CategoriesService();
