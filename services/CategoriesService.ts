import { AOResult } from "../helpers";
import { ICategory } from "../types";
import { getModelsFromFirebase } from "../utils";

class CategoriesService {
  getCategories = (): Promise<AOResult<ICategory[]>> => {
    return getModelsFromFirebase("/categories.json");
  };
}

export default new CategoriesService();
