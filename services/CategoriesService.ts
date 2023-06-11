import axios from "axios";

import { API_URL } from "../config";
import ICategory from "../types/category";
import ICategoriesArray from "../types/firebase/category/categoriesArray";
import { AOResult, ExecuteAsync } from "../helpers/AOResult";
import firebaseResponseToModels from "../helpers/firebaseResponseToModels";

class CategoriesService {
  getCategories = (): Promise<AOResult<ICategory[]>> =>
    ExecuteAsync(
      async (onFailure: (message: string) => void): Promise<ICategory[]> => {
        const response = await axios.get<ICategoriesArray>(
          API_URL + "/categories.json"
        );

        return firebaseResponseToModels<ICategory>(response.data);
      }
    );
}

export default new CategoriesService();
