import { AOResult } from "../helpers";
import { ICategory } from "../types";
import { getModelsFromFirebase } from "../utils";

class CategoriesService {
  getCategories = (): Promise<AOResult<ICategory[]>> => {
    return getModelsFromFirebase("/categories.json");
  };

  getCategoryName = (categoryId: string, categories: ICategory[]): string =>
    categories.find((x) => x.id == categoryId)?.name ?? "Unknown category";
}

export default new CategoriesService();
